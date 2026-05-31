import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import { MdOutlineBloodtype, MdRefresh } from "react-icons/md";
import { FiAlertTriangle, FiActivity, FiTrendingUp } from "react-icons/fi";
import { RiHospitalLine } from "react-icons/ri";

import Layout from "../../components/shared/Layout/Layout";
import Loader from "../../components/shared/Loader";
import TableWrapper from "../../components/shared/TableWrapper";
import API from "../../services/API";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const BLOOD_GROUPS = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

// === Risk level -> theme styling ===
const RISK_META = {
  critical: {
    label: "Critical",
    badge: "bg-primary-red/15 text-primary-red border-primary-red/30",
    dot: "bg-primary-red",
    line: "#e31612",
    fill: "rgba(227,22,18,0.12)",
  },
  moderate: {
    label: "Moderate",
    badge: "bg-amber-400/20 text-amber-600 border-amber-400/40",
    dot: "bg-amber-500",
    line: "#f59e0b",
    fill: "rgba(245,158,11,0.12)",
  },
  stable: {
    label: "Stable",
    badge: "bg-primary-green/15 text-primary-green border-primary-green/30",
    dot: "bg-primary-green",
    line: "#058534",
    fill: "rgba(5,133,52,0.12)",
  },
};

function RiskBadge({ level }) {
  const meta = RISK_META[level] || RISK_META.stable;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${meta.badge}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      {meta.label}
    </span>
  );
}

// === Build a "historical vs predicted" line-chart config for one group ===
function buildChartData(group) {
  if (!group) return { labels: [], datasets: [] };

  const history = group.history || [];
  const forecast = group.forecast || [];

  const labels = [
    ...history.map((h) => h.date.slice(5)), // MM-DD
    ...forecast.map((f) => f.date.slice(5)),
  ];

  const histData = [...history.map((h) => h.demand), ...forecast.map(() => null)];

  // Connect the predicted line to the last historical point.
  const lastHist = history.length ? history[history.length - 1].demand : null;
  const predData = [
    ...history.slice(0, -1).map(() => null),
    lastHist,
    ...forecast.map((f) => f.predicted),
  ];

  const meta = RISK_META[group.risk?.level] || RISK_META.stable;

  return {
    labels,
    datasets: [
      {
        label: "Historical demand",
        data: histData,
        borderColor: "#191919",
        backgroundColor: "rgba(25,25,25,0.06)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.35,
        fill: true,
      },
      {
        label: "Predicted demand",
        data: predData,
        borderColor: meta.line,
        backgroundColor: meta.fill,
        borderWidth: 2.5,
        borderDash: [6, 4],
        pointRadius: 3,
        pointBackgroundColor: meta.line,
        tension: 0.35,
        fill: true,
      },
    ],
  };
}

const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  plugins: {
    legend: { position: "top", labels: { usePointStyle: true, boxWidth: 8 } },
    tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.y ?? "—"} units` } },
  },
  scales: {
    y: { beginAtZero: true, title: { display: true, text: "Units (mL bags)" } },
    x: { ticks: { maxTicksLimit: 12 } },
  },
};

export default function Forecast() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [forecasts, setForecasts] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("O-");
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setError(null);
      const [allRes, alertRes] = await Promise.all([
        API.get("/forecast/all"),
        API.get("/forecast/alerts"),
      ]);

      if (allRes.data?.success) setForecasts(allRes.data.forecasts || {});
      if (alertRes.data?.success) setAlerts(alertRes.data.alerts || []);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Could not reach the AI forecasting service.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const selected = forecasts[selectedGroup];
  const chartData = useMemo(() => buildChartData(selected), [selected]);

  // Summary counters for the header.
  const summary = useMemo(() => {
    const groups = Object.values(forecasts);
    return {
      critical: groups.filter((g) => g.risk?.level === "critical").length,
      moderate: groups.filter((g) => g.risk?.level === "moderate").length,
      stable: groups.filter((g) => g.risk?.level === "stable").length,
      totalPredicted: groups.reduce((s, g) => s + (g.total_predicted || 0), 0),
    };
  }, [forecasts]);

  // Hospital preparedness recommendations derived from the forecast.
  const prepRecommendations = useMemo(() => {
    const groups = Object.values(forecasts);
    const recs = [];
    const critical = groups.filter((g) => g.risk?.level === "critical");
    const moderate = groups.filter((g) => g.risk?.level === "moderate");

    if (critical.length) {
      recs.push(
        `Activate emergency donor call-lists for ${critical
          .map((g) => g.blood_group)
          .join(", ")} and pre-position units at high-traffic hospitals.`,
      );
    }
    if (moderate.length) {
      recs.push(
        `Schedule donation drives this week for ${moderate
          .map((g) => g.blood_group)
          .join(", ")} to rebuild buffer stock.`,
      );
    }
    // Highest predicted demand group.
    const top = [...groups].sort(
      (a, b) => (b.total_predicted || 0) - (a.total_predicted || 0),
    )[0];
    if (top) {
      recs.push(
        `${top.blood_group} shows the highest projected 7-day demand (${top.total_predicted} units) — keep it fully stocked.`,
      );
    }
    recs.push(
      "Cross-match universal donors (O-) availability with trauma centres before the weekend.",
    );
    return recs;
  }, [forecasts]);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* === Header === */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-primary-dark/10 bg-linear-to-br from-primary-blue/10 via-primary-light to-primary-red/10 p-6 sm:p-8 mb-6 sm:mb-8">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-blue mb-2">
              AI-Powered · LSTM Forecast
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark tracking-tight">
              Blood Demand <span className="gradient-text">Forecast</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-primary-dark/70 max-w-2xl leading-relaxed">
              Next 7-day demand predictions for all 8 blood groups with smart
              shortage alerts and hospital preparedness recommendations.
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="inline-flex items-center gap-2 self-start rounded-xl bg-primary-dark px-4 py-2.5 text-sm font-semibold text-primary-light transition hover:opacity-90 disabled:opacity-50"
          >
            <MdRefresh className={refreshing ? "animate-spin" : ""} size={18} />
            {refreshing ? "Refreshing..." : "Refresh forecast"}
          </button>
        </div>
      </section>

      {/* === Service unavailable banner === */}
      {error && (
        <div className="mb-6 rounded-2xl border border-primary-red/30 bg-primary-red/5 p-5">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="text-primary-red mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-primary-dark">
                Forecasting service unavailable
              </p>
              <p className="mt-1 text-sm text-primary-dark/70">{error}</p>
              <p className="mt-2 text-xs text-primary-dark/50">
                Start it with{" "}
                <code className="rounded bg-primary-dark/10 px-1.5 py-0.5">
                  uvicorn api:app --port 8000
                </code>{" "}
                inside <code>ai_service/</code>, then refresh.
              </p>
            </div>
          </div>
        </div>
      )}

      {!error && (
        <>
          {/* === Summary counters === */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {[
              { label: "Critical groups", value: summary.critical, icon: FiAlertTriangle, color: "text-primary-red", bg: "bg-primary-red/10 border-primary-red/20" },
              { label: "Moderate groups", value: summary.moderate, icon: FiActivity, color: "text-amber-600", bg: "bg-amber-400/10 border-amber-400/30" },
              { label: "Stable groups", value: summary.stable, icon: FiTrendingUp, color: "text-primary-green", bg: "bg-primary-green/10 border-primary-green/20" },
              { label: "7-day demand (all)", value: `${summary.totalPredicted} u`, icon: MdOutlineBloodtype, color: "text-primary-blue", bg: "bg-primary-blue/10 border-primary-blue/20" },
            ].map(({ label, value, icon: Icon, color, bg }) => (
              <div key={label} className={`rounded-2xl border p-4 sm:p-5 ${bg}`}>
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-primary-dark/60">{label}</p>
                  <Icon className={color} size={18} />
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-primary-dark">
                  {value}
                </p>
              </div>
            ))}
          </section>

          {/* === Smart shortage alerts === */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
              <FiAlertTriangle className="text-primary-red" /> Smart shortage alerts
            </h2>
            {alerts.length === 0 ? (
              <div className="rounded-2xl border border-primary-green/25 bg-primary-green/5 p-5 text-sm text-primary-dark/70">
                All blood groups are projected to stay stable over the next 7 days.
                No action required.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {alerts.map((alert) => {
                  const meta = RISK_META[alert.level] || RISK_META.stable;
                  return (
                    <div
                      key={alert.blood_group}
                      className={`rounded-2xl border p-5 ${meta.badge.replace("text-", "border-").split(" ")[2] || ""} ${alert.level === "critical" ? "bg-primary-red/5 border-primary-red/25" : "bg-amber-400/5 border-amber-400/30"}`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="inline-flex items-center gap-2 text-lg font-bold text-primary-dark">
                          <MdOutlineBloodtype className={meta.dot.replace("bg-", "text-")} />
                          {alert.blood_group}
                        </span>
                        <RiskBadge level={alert.level} />
                      </div>
                      <p className="text-sm text-primary-dark/80 leading-relaxed">
                        {alert.recommendation}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-dark/55">
                        <span>Avg demand: <b>{alert.avg_demand} u/day</b></span>
                        <span>Capacity: <b>{alert.capacity} u/day</b></span>
                        {alert.shortage_in_days && (
                          <span>Shortage in: <b>{alert.shortage_in_days} day(s)</b></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* === Interactive line chart === */}
          <section className="mb-6 sm:mb-8 rounded-2xl border border-primary-dark/10 bg-primary-light p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <h2 className="text-lg sm:text-xl font-semibold text-primary-dark">
                Historical vs predicted demand
              </h2>
              <div className="flex flex-wrap gap-2">
                {BLOOD_GROUPS.map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setSelectedGroup(bg)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition border ${
                      selectedGroup === bg
                        ? "bg-primary-dark text-primary-light border-primary-dark"
                        : "bg-primary-light text-primary-dark/70 border-primary-dark/15 hover:border-primary-dark/40"
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-72 sm:h-96">
              {selected ? (
                <Line data={chartData} options={CHART_OPTIONS} />
              ) : (
                <p className="text-sm text-primary-dark/50">No data for {selectedGroup}.</p>
              )}
            </div>
          </section>

          {/* === Blood group forecast cards === */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-4">
              Blood group forecast cards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BLOOD_GROUPS.map((bg) => {
                const g = forecasts[bg];
                if (!g) return null;
                const meta = RISK_META[g.risk?.level] || RISK_META.stable;
                return (
                  <button
                    key={bg}
                    onClick={() => setSelectedGroup(bg)}
                    className={`text-left rounded-2xl border p-5 transition hover:shadow-lg hover:-translate-y-0.5 ${
                      selectedGroup === bg
                        ? "border-primary-dark/40 ring-2 ring-primary-dark/10"
                        : "border-primary-dark/10"
                    } bg-primary-light`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xl font-bold text-primary-dark">
                        <MdOutlineBloodtype className={meta.dot.replace("bg-", "text-")} />
                        {bg}
                      </span>
                      <RiskBadge level={g.risk?.level} />
                    </div>
                    <div className="space-y-1.5 text-sm text-primary-dark/70">
                      <p>7-day demand: <b className="text-primary-dark">{g.total_predicted} u</b></p>
                      <p>Avg / day: <b className="text-primary-dark">{g.avg_predicted} u</b></p>
                      <p>Capacity: <b className="text-primary-dark">{g.risk?.capacity} u</b></p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* === Recommendation cards === */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-4">
              Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BLOOD_GROUPS.map((bg) => {
                const g = forecasts[bg];
                if (!g) return null;
                const meta = RISK_META[g.risk?.level] || RISK_META.stable;
                return (
                  <div
                    key={bg}
                    className="flex items-start gap-3 rounded-2xl border border-primary-dark/10 bg-primary-light p-4"
                  >
                    <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${meta.dot}`} />
                    <p className="text-sm text-primary-dark/80 leading-relaxed">
                      <b className="text-primary-dark">{bg}:</b> {g.recommendation}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* === Next 7-day prediction table === */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-4">
              Next 7-day predictions — {selectedGroup}
            </h2>
            <TableWrapper>
              <table className="w-full text-sm">
                <thead className="bg-primary-blue text-primary-light">
                  <tr>
                    <th className="p-3">Day</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Predicted demand (units)</th>
                  </tr>
                </thead>
                <tbody>
                  {selected?.forecast?.length ? (
                    selected.forecast.map((f, i) => (
                      <tr
                        key={f.date}
                        className="border-b border-primary-dark/20 font-medium"
                      >
                        <td className="p-3 text-center">Day {i + 1}</td>
                        <td className="p-3 text-center">{f.date}</td>
                        <td className="p-3 text-center font-bold text-primary-dark">
                          {f.predicted}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-4 text-center text-primary-dark/50">
                        No prediction data.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </TableWrapper>
          </section>

          {/* === Hospital preparedness recommendations === */}
          <section className="rounded-2xl border border-primary-dark/10 bg-primary-dark/2 p-5 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-primary-dark mb-3 flex items-center gap-2">
              <RiHospitalLine className="text-primary-blue" /> Hospital preparedness recommendations
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-dark/75">
              {prepRecommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                  {rec}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </Layout>
  );
}

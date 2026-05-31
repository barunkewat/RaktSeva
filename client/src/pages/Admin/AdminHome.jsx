import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import Loader from "../../components/shared/Loader";
import API from "../../services/API";
import { FiUser } from "react-icons/fi";
import { PiHospitalFill } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBloodtype, MdArrowOutward } from "react-icons/md";
import { TbChartLine } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";

const quickActions = [
  {
    to: "/donor-list",
    icon: FiUser,
    label: "Donor List",
    description: "View and manage registered donors",
    accent: "bg-primary-red/15 border-primary-red/25 text-primary-red",
  },
  {
    to: "/hospital-list",
    icon: PiHospitalFill,
    label: "Hospital List",
    description: "Oversee hospital accounts on the platform",
    accent: "bg-primary-blue/15 border-primary-blue/25 text-primary-blue",
  },
  {
    to: "/organisation-list",
    icon: GoOrganization,
    label: "Organisation List",
    description: "Manage blood banks and NGOs",
    accent: "bg-primary-green/15 border-primary-green/25 text-primary-green",
  },
  {
    to: "/forecast",
    icon: TbChartLine,
    label: "Demand Forecast",
    description: "AI-powered 7-day blood demand predictions & shortage alerts",
    accent: "bg-primary-blue/15 border-primary-blue/25 text-primary-blue",
  },
  {
    to: "/analytics",
    icon: SiGoogleanalytics,
    label: "Analytics",
    description: "Blood stock trends and recent transactions",
    accent: "bg-primary-dark/5 border-primary-dark/15 text-primary-dark",
  },
  {
    to: "/settings",
    icon: IoSettingsOutline,
    label: "Settings",
    description: "Update your admin profile and preferences",
    accent: "bg-primary-dark/5 border-primary-dark/15 text-primary-dark",
  },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function AdminHome() {
  const { user, loading } = useSelector((state) => state.auth);
  const [statsLoading, setStatsLoading] = useState(true);
  const [stats, setStats] = useState({
    donors: 0,
    hospitals: 0,
    organisations: 0,
    availableBlood: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [donors, hospitals, organisations, bloodGroups] = await Promise.all([
          API.get("/admin/donor-list"),
          API.get("/admin/hospital-list"),
          API.get("/admin/organisation-list"),
          API.get("/analytics/bloodGroups-data"),
        ]);

        const availableBlood =
          bloodGroups.data?.bloodGroupData?.reduce(
            (sum, item) => sum + (item.availableBlood ?? 0),
            0,
          ) ?? 0;

        setStats({
          donors: donors.data?.totalCount ?? 0,
          hospitals: hospitals.data?.totalCount ?? 0,
          organisations: organisations.data?.totalCount ?? 0,
          availableBlood,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Registered Donors",
      value: stats.donors,
      icon: FiUser,
      color: "bg-[rgba(227,22,18,0.12)] border-primary-red/20",
      iconColor: "text-primary-red",
    },
    {
      label: "Hospitals",
      value: stats.hospitals,
      icon: PiHospitalFill,
      color: "bg-[rgba(33,150,243,0.12)] border-primary-blue/20",
      iconColor: "text-primary-blue",
    },
    {
      label: "Organisations",
      value: stats.organisations,
      icon: GoOrganization,
      color: "bg-[rgba(5,133,52,0.12)] border-primary-green/20",
      iconColor: "text-primary-green",
    },
    {
      label: "Available Blood",
      value: `${stats.availableBlood.toLocaleString()} mL`,
      icon: MdOutlineBloodtype,
      color: "bg-primary-dark/5 border-primary-dark/15",
      iconColor: "text-primary-dark",
    },
  ];

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-primary-dark/10 bg-linear-to-br from-primary-green/10 via-primary-light to-primary-red/10 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary-red/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary-green/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-green mb-2">
              Admin Dashboard
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark tracking-tight">
              {getGreeting()},{" "}
              <span className="gradient-text capitalize">{user?.name}</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-primary-dark/70 max-w-xl leading-relaxed">
              Monitor users, oversee blood inventory across organisations, and
              keep the RaktSeva platform running smoothly.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-dark text-primary-light">
              <HiOutlineUsers size={24} />
            </div>
            <div>
              <p className="text-xs text-primary-dark/50 uppercase tracking-wide">
                Total users
              </p>
              <p className="text-2xl font-bold text-primary-dark">
                {statsLoading ? "—" : stats.donors + stats.hospitals + stats.organisations}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-primary-dark mb-4">
          Platform overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {statCards.map(({ label, value, icon: Icon, color, iconColor }) => (
            <div
              key={label}
              className={`rounded-2xl border p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${color}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-primary-dark/60">{label}</p>
                  <p className="mt-2 text-2xl sm:text-3xl font-bold text-primary-dark">
                    {statsLoading ? (
                      <span className="inline-block w-12 h-8 bg-primary-dark/10 rounded animate-pulse" />
                    ) : (
                      value
                    )}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light/80 ${iconColor}`}
                >
                  <Icon size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-primary-dark">
            Quick actions
          </h2>
          <p className="text-xs sm:text-sm text-primary-dark/50 hidden sm:block">
            Jump to common admin tasks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {quickActions.map(({ to, icon: Icon, label, description, accent }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-2xl border border-primary-dark/10 bg-primary-light p-5 sm:p-6 transition-all duration-200 hover:border-primary-green/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl border ${accent}`}
                >
                  <Icon size={22} />
                </div>
                <MdArrowOutward
                  size={18}
                  className="text-primary-dark/30 group-hover:text-primary-green transition-colors duration-200 mt-1"
                />
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-primary-dark">
                {label}
              </h3>
              <p className="mt-1.5 text-sm text-primary-dark/60 leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Admin tips */}
      <section className="mt-8 sm:mt-10 rounded-2xl border border-primary-dark/10 bg-primary-dark/2 p-5 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold text-primary-dark mb-3">
          Admin responsibilities
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-primary-dark/70">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
            Review and remove inactive or duplicate user accounts.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-green shrink-0" />
            Monitor blood availability through analytics before shortages arise.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
            Ensure hospitals and organisations stay connected for urgent requests.
          </li>
        </ul>
      </section>
    </Layout>
  );
}

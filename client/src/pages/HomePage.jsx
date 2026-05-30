import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/shared/Loader";
import TableWrapper from "../components/shared/TableWrapper";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/Modal/Modal";
import API from "../services/API";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const canAddInventory =
    user?.role === "organisation" || user?.role === "donor";

  // === Get blood records ===
  const getBloodRecords = async () => {
    try {
      if (user?.role === "donor") {
        const res = await API.post("/inventory/get-inventory-hospital", {
          filters: {},
        });
        if (res.data?.success) {
          setData(res.data.inventory);
        }
        return;
      }

      const res = await API.get("/inventory/get-inventory");
      if (res.data?.success) {
        setData(res.data.inventory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch inventory");
    }
  };

  useEffect(() => {
    if (!user?.role || user.role === "admin") return;
    getBloodRecords();
  }, [user?.role]);

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin", { replace: true });
    }
  }, [user?.role, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight">
                Blood availability
              </h1>
              <p className="mt-2 text-sm sm:text-base text-primary-dark/60">
                View current blood stock to donate or request blood for patients.
              </p>
            </div>

            {canAddInventory && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="shrink-0 w-full sm:w-auto px-4 py-2 text-sm sm:text-base text-white font-medium bg-primary-red rounded-full cursor-pointer"
              >
                + Add Inventory
              </button>
            )}
          </div>

          <TableWrapper>
            <table className="w-full text-sm">
              <thead className="bg-primary-red text-primary-light">
                <tr>
                  <th className="p-2 sm:p-3 whitespace-nowrap">#</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Blood Group</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Inventory Type</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Quantity</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Donor Email</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Date & Time</th>
                </tr>
              </thead>

              <tbody>
                {data?.length > 0 ? (
                  data.map((record, index) => (
                    <tr
                      key={record._id}
                      className="border-b border-primary-dark/40 font-medium"
                    >
                      <td className="p-3 text-center">{index + 1}.</td>

                      <td className="p-3 text-center">{record.bloodGroup}</td>

                      <td
                        className={`p-3 text-center uppercase ${
                          record.inventoryType === "in"
                            ? "text-primary-green"
                            : "text-primary-red"
                        }`}
                      >
                        {record.inventoryType}
                      </td>

                      <td
                        className={`p-3 text-center ${
                          record.inventoryType === "in"
                            ? "text-primary-green"
                            : "text-primary-red"
                        }`}
                      >
                        {record.quantity} mL
                        {record.inventoryType === "in" ? "\u2191" : "\u2193"}
                      </td>

                      <td
                        className={`p-3 text-center ${
                          record.email
                            ? "text-primary-dark"
                            : "text-primary-dark/50"
                        }`}
                      >
                        {record.email || "Not Available"}
                      </td>

                      <td className="p-3 text-center">
                        {new Date(record.createdAt)
                          .toLocaleString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })
                          .replace(" at ", ", ")
                          .replace(/am|pm/i, (match) => match.toUpperCase())}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-primary-dark/50">
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableWrapper>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSuccess={getBloodRecords}
          />
        </>
      )}
    </Layout>
  );
}

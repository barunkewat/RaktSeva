import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/shared/Loader";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/Modal/Modal";
import API from "../services/API";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  // === Get blood records ===
  const getBloodRecords = async () => {
    try {
      const res = await API.get("/inventory/get-inventory");

      if (res.data?.success) {
        setData(res.data.inventory);
        // console.log(res.data.inventory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch inventory");
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <Layout>
      {user?.role === "admin" && navigate("/admin")}
      {error && toast.error(error)}
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className="flex justify-end items-center mb-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 text-white font-medium bg-primary-red rounded-full cursor-pointer"
            >
              + Add Inventory
            </button>
        </div>

          {/* Table */}
          <div className="w-full h-screen">
            <table className="w-full">
              <thead className="bg-primary-red text-primary-light">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Blood Group</th>
                  <th className="p-3">Inventory Type</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Donor Email</th>
                  <th className="p-3">Date & Time</th>
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
                    <td className="p-4 text-center text-primary-dark/50">
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      )}
    </Layout>
  );
}

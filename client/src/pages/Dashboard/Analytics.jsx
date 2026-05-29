import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { toast } from "react-toastify";

export default function Analytics() {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  // Card background colors
  const cardColors = [
    "bg-[rgba(227,22,18,0.25)]",
    "bg-[rgba(5,133,52,0.25)]",
    "bg-[rgba(33,150,243,0.25)]",
  ];

  // === Get blood group data ===
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");

      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // === Lifecycle method ===
  useEffect(() => {
    getBloodGroupData();
  }, []);

  // === Get recent blood records ===
  const getRecentBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");

      if (data?.success) {
        setInventoryData(data.inventory);
        // console.log(data);
      }
    } catch (error) {
      toast.error("Failed to fetch inventory");
      console.log(error);
    }
  };

  useEffect(() => {
    getRecentBloodRecords();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((record, index) => {
          const bgColor = cardColors[index % cardColors.length];

          return (
            <div
              key={record.bloodGroup}
              className={`${bgColor} rounded-3xl p-4 border border-primary-dark/20 hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
              style={{ willChange: "transform" }}
            >
              <div className="space-y-1 text-base">
                <p className="font-medium">Blood Group: {record.bloodGroup}</p>
                <p className="font-medium">Total In: {record.totalIn} mL</p>
                <p className="font-medium">Total Out: {record.totalOut} mL</p>
                <div className="flex items-center justify-center bg-primary-dark text-primary-light text-sm font-medium rounded-xl py-1 mt-4 cursor-pointer">
                  Available Blood: {record.availableBlood} mL
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full">
        <h1 className="text-4xl font-semibold tracking-tight mt-10 mb-3">Recent Blood Transactions</h1>
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
            {inventoryData?.length > 0 ? (
              inventoryData.map((record, index) => {
                return (
                  <>
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
                  </>
                );
              })
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
    </Layout>
  );
}

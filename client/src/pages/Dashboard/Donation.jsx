import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import API from "../../services/API";

export default function Donation() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  // === Find donor records ===
  const getDonation = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donor: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonation();
  }, []);
  return (
    <Layout>
      <div className="w-full">
        <table className="w-full">
          <thead className="bg-primary-red text-primary-light">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Blood Group</th>
              <th className="p-3">Inventory Type</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Email</th>
              <th className="p-3">Date</th>
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
    </Layout>
  );
}

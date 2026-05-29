import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import TableWrapper from "../../components/shared/TableWrapper";
import API from "../../services/API";

export default function Donor() {
  const [data, setData] = useState([]);
  // === Find donor records ===
  const getDonors = async () => {
    try {
      const { data } = await API.get("/inventory/get-donors");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);
  return (
    <Layout>
      <TableWrapper>
        <table className="w-full text-sm">
          <thead className="bg-primary-red text-primary-light">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
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
                  <td className="p-3 text-center uppercase">
                    {record.name}
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
                  <td className="p-3 text-center">{record.phone}</td>
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
      </TableWrapper>
    </Layout>
  );
}

import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import TableWrapper from "../../components/shared/TableWrapper";
import API from "../../services/API";
import { useSelector } from "react-redux";

export default function Organisation() {
  // === Get current user ===
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  // === Find organisation records ===
  const getOrganisation = async () => {
    try {
      if (user?.role === "donor") {
        const { data } = await API.get("/inventory/get-organisations");
        //   console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get("/inventory/get-organisation-for-hospital");
        //   console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganisation();
  }, [user]);
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
              <th className="p-3">Address</th>
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
                    {record.organisationName + " (Org)"}
                  </td>
                  <td className="p-3 text-center">
                    {record.email || "Not Available"}
                  </td>
                  <td className="p-3 text-center">{record.phone}</td>
                  <td className="p-3 text-center capitalize">
                    {record.address}
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
      </TableWrapper>
    </Layout>
  );
}

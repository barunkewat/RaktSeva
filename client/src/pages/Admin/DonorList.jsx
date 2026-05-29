import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DonorList() {
  const [donorData, setDonorData] = useState([]);

  // === Find donor records ===
  const getDonorList = async () => {
    try {
      const { data } = await API.get("/admin/donor-list");
      if (data?.success) {
        setDonorData(data?.donorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonorList();
  }, []);

  // === Delete function ===
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt("Are you sure, want to delete this donor record?","Sure",);
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary-red text-primary-light">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {donorData?.length > 0 ? (
              donorData.map((record, index) => (
                <tr
                  key={record._id}
                  className="border-b border-primary-dark/40 font-medium"
                >
                  {/* Index */}
                  <td className="p-3 text-center text-primary-dark">
                    {index + 1}.
                  </td>

                  {/* Name */}
                  <td
                    className={`p-3 text-center capitalize ${
                      record.name ? "text-primary-dark" : "text-primary-dark/75"
                    }`}
                  >
                    {record.name || "Not Available"}
                  </td>

                  {/* Email */}
                  <td
                    className={`p-3 text-center ${
                      record.email
                        ? "text-primary-dark"
                        : "text-primary-dark/75"
                    }`}
                  >
                    {record.email || "Not Available"}
                  </td>

                  {/* Phone */}
                  <td
                    className={`p-3 text-center ${
                      record.phone
                        ? "text-primary-dark"
                        : "text-primary-dark/75"
                    }`}
                  >
                    {record.phone || "Not Available"}
                  </td>

                  {/* Date */}
                  <td
                    className={`p-3 text-center ${
                      record.createdAt
                        ? "text-primary-dark"
                        : "text-primary-dark/75"
                    }`}
                  >
                    {record.createdAt
                      ? new Date(record.createdAt)
                          .toLocaleString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })
                          .replace(" at ", ", ")
                          .replace(/am|pm/i, (match) => match.toUpperCase())
                      : "Not Available"}
                  </td>

                  {/* Action */}
                  <td className="p-3 flex justify-center items-center">
                    <button
                      onClick={() => handleDelete(record._id)}
                      className="flex justify-center items-center gap-x-1 bg-primary-red/20 hover:bg-primary-red/30 text-sm border border-primary-red/40 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <RiDeleteBin6Line size={12} className="mt-0.45" />
                      <p>Delete</p>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="p-4 text-center text-primary-dark/75"
                >
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

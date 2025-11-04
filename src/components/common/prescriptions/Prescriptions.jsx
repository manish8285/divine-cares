import { useState } from "react";
import PrescriptionSearch from "./PrescriptionSearch";
import { searchPrescriptionsApi } from "../../../api";

const Prescriptions = () => {
  const [loading, setLoading] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);

  const handleSearch = async (filters) => {
    setLoading(true);
    try {
        console.log('going',filters)
      const res = await searchPrescriptionsApi(filters)
      setPrescriptions(res.data || []);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="container my-4 space-y-4">

      {/* Search Component */}
      <PrescriptionSearch onSearch={handleSearch} />

      {/* Results */}
      <div className="bg-white shadow p-4 rounded-lg">

        {/* Loading Indicator */}
        {loading && (
          <div className="py-5 text-center">
            <div className="animate-spin border-4 border-gray-300 border-t-transparent rounded-full w-8 h-8 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">Searching prescriptions...</p>
          </div>
        )}

        {/* No data */}
        {!loading && prescriptions.length === 0 && (
          <p className="text-center text-gray-600 py-4">No prescriptions found.</p>
        )}

        {/* Table */}
        {!loading && prescriptions.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border p-2">#</th>
                  <th className="border p-2">Patient</th>
                  <th className="border p-2">Mobile</th>
                  <th className="border p-2">Address</th>
                  <th className="border p-2">Rx</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">View</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p, i) => (
                  <tr key={p._id} className="hover:bg-gray-50">
                    <td className="border p-2">{i + 1}</td>
                    <td className="border p-2">{p.patient?.name}</td>
                    <td className="border p-2">{p.patient?.phone}</td>
                    <td className="border p-2">{p.patient?.address}</td>
                    <td className="border p-2">{p?.notes}</td>
                    <td className="border p-2">{new Date(p.createdAt).toLocaleDateString()}</td>
                    <td className="border p-2">
                      <a
                        href={`/prescription/${p.viewToken}`}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescriptions;

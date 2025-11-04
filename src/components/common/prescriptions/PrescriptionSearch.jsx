import { useState, useEffect } from "react";

const PrescriptionSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
    mobile: "",
    date: ""
  });

  // ✅ Debounce search trigger
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(filters);
    }, 400);

    return () => clearTimeout(delay);
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-3">
      <h5 className="font-semibold">Search Prescription</h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        <input
          type="text"
          name="name"
          placeholder="Search by Patient Name..."
          value={filters.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Search by Mobile..."
          value={filters.mobile}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
        />

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
        />

      </div>
    </div>
  );
};

export default PrescriptionSearch;

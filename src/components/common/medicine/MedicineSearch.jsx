import  { useEffect, useState } from "react";
import { searchMedicineApi } from "../../../api";

const MedicineSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    //e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a disease, symptom, or medicine name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await searchMedicineApi(query)
      setMedicines(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching medicines");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    handleSearch()
  },[query])

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🔍 Search Homoeopathic Medicines</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter disease, symptom, or medicine name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button disabled type="submit" className="btn btn-primary">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Results */}
      {loading ? (
        <div className="text-center my-4">Loading medicines...</div>
      ) : medicines.length > 0 ? (
        <div className="row g-4">
          {medicines.map((med) => (
            <div className="col-md-4" key={med._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{med.name}</h5>
                  <p className="card-text">
                    <strong>Type:</strong> {med.type}<br />
                    <strong>Dose:</strong> {med.dose || "N/A"}<br />
                    <strong>Size:</strong> {med.size || "N/A"}<br />
                    <strong>Quantity:</strong> {med.quantity || "N/A"}
                  </p>
                  {med.symptoms && med.symptoms.length > 0 && (
                    <p className="card-text">
                      <strong>Symptoms:</strong> {med.symptoms.join(", ")}
                    </p>
                  )}
                  {med.relatedDiseases && med.relatedDiseases.length > 0 && (
                    <p className="card-text">
                      <strong>Related Diseases:</strong> {med.relatedDiseases.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-muted">No medicines found.</p>
      )}
    </div>
  );
};

export default MedicineSearch;

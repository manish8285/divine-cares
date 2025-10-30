import { useEffect, useState } from "react";
import { searchMedicineApi } from "../../../api";
import PrescriptionView from "./PrescriptionView";

const MedicineSearch = () => {
  const [query, setQuery] = useState("");
  const [filterOption, setFilterOption] = useState("name");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [patient, setPatient] = useState({ name: "", age: "", phone: "",email:"",address:"",gender:"" });
    const [notes, setNotes] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await searchMedicineApi(query);
      setMedicines(response.data || []);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleMedicineSelect = (med) => {
    if (!selectedMedicines.find((m) => m._id === med._id)) {
      setSelectedMedicines([...selectedMedicines, med]);
    }
  };

  const handleRemoveMedicine = (id) => {
    setSelectedMedicines(selectedMedicines.filter((m) => m._id !== id));
  };

  const handleSubmitPrescription = () => {
    const payload = {
      patient,
      notes,
      medicines: selectedMedicines.map((m) => ({
        id: m._id,
        name: m.name,
        dose: m.dose,
      }))
    };

    console.log("Send to backend:", payload);
    alert("Prescription submitted (check console)");
  };

  useEffect(() => {
    if (query) handleSearch();
  }, [query, filterOption]);

  return (
    <div className="container py-5">

      {/* ------------------ STEP 1: MEDICINE SELECTION ------------------ */}
      {step === 1 && (
        <>
          <h3 className="mb-4 text-center">Create Prescription</h3>

          {/* Selected Medicines */}
          {selectedMedicines.length > 0 && (
            <div className="mb-3">
              <h5>Selected Medicines:</h5>
              <ul style={{"listStyleType":"none"}}>
                {selectedMedicines.map((med, index) => (
                  <li key={med._id} className="mb-2">
                    <span className="badge bg-primary p-2 me-2">
                      {index + 1}
                    </span>
                    <span className="badge bg-light text-dark border p-2 me-2">
                      {med.name} — {med.dose}
                    </span>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemoveMedicine(med._id)}
                    >✕</button>
                  </li>
                ))}
              </ul>
              <button 
                className="btn btn-primary mt-2"
                onClick={() => setStep(2)}
              >Next</button>
            </div>
          )}

          {/* Search Box + Dropdown */}
          <div className="d-flex mb-4">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter disease, symptom, or medicine name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* <select
              className="form-select w-25"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="name">Select Disease</option>
              <option value="symptom">Tumor</option>
              <option value="disease">Piles</option>
            </select> */}
          </div>

          {/* Results */}
          {loading ? <p>Searching...</p> : (
            <div className="row g-3">
              {medicines.map((med) => (
                <div key={med._id} className="col-md-4">
                  <div 
                    className="card p-3 shadow-sm clickable"
                    style={{cursor: "pointer"}}
                    onClick={() => handleMedicineSelect(med)}
                  >
                    <h5 className="text-primary">{med.name}</h5>
                    <small><b>Dose:</b> {med.dose}</small>
                    {med.symptoms?.length > 0 && (
                      <p className="text-muted small mt-1">
                        <b>Symptoms:</b> {med.symptoms.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ------------------ STEP 2: PATIENT DETAILS ------------------ */}
      {step === 2 && (
        <div className="card p-4 shadow">
          <h4 className="mb-3">Patient Details</h4>

          <input 
            className="form-control mb-2"
            placeholder="Patient Name"
            value={patient.name}
            onChange={e => setPatient({...patient, name: e.target.value})}
          />
          <input 
            className="form-control mb-2"
            placeholder="Age"
            value={patient.age}
            onChange={e => setPatient({...patient, age: e.target.value})}
          />
          <input 
            className="form-control mb-2"
            placeholder="Gender"
            value={patient.gender}
            onChange={e => setPatient({...patient, gender: e.target.value})}
          />
          <input 
            className="form-control mb-3"
            placeholder="Phone"
            value={patient.phone}
            onChange={e => setPatient({...patient, phone: e.target.value})}
          />
          <input 
            className="form-control mb-3"
            placeholder="Email"
            value={patient.email}
            onChange={e => setPatient({...patient, email: e.target.value})}
          />
          <input 
            className="form-control mb-3"
            placeholder="Address"
            value={patient.address}
            onChange={e => setPatient({...patient, address: e.target.value})}
          />

          <input 
            className="form-control mb-3"
            placeholder="Notes"
            value={patient.notes}
            onChange={e => setNotes(...notes, e.target.value)}
          />

          <button className="btn btn-secondary me-2" onClick={() => setStep(1)}>Back</button>
          <button className="btn btn-primary mt-2" onClick={()=>setStep(3)}>
            Submit Prescription
          </button>
        </div>
      )}


      {
        step===3 && (
          <PrescriptionView prescription={{patient,notes,medicines:selectedMedicines}} />
        )
      }
    </div>
  );
};

export default MedicineSearch;

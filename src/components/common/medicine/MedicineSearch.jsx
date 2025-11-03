import { useEffect, useState } from "react";
import { createPrescriptionApi, searchMedicineApi } from "../../../api";
import PrescriptionView from "./PrescriptionView";
import { useNavigate } from "react-router-dom";

const MedicineSearch = () => {
  const [query, setQuery] = useState("");
  const [filterOption, setFilterOption] = useState("name");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [patient, setPatient] = useState({ name: "", age: "", phone: "",email:"",address:"",gender:"" });
  const [notes, setNotes] = useState("");
  let navigate = useNavigate()

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await searchMedicineApi(query);
      setMedicines(response.data || []);
    } catch (err) {
      setError("Something went wrong",err);
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

const handleSubmitPrescription = async () => {
  try {
    const payload = {
      patient,
      notes,
      medicines: selectedMedicines.map(med => ({
        medicine: med._id,     // ref id
        name: med.name,        // duplicate name
        dosage: med.dose
      }))
    };

    console.log("Sending to backend:", payload);

    const response = await createPrescriptionApi(payload);

    console.log("Prescription saved:", response.data);

    navigate(`/prescription/${response.data.viewToken}`);

  } catch (err) {
    console.error("Error submitting prescription:", err);
    setError(err);
  }
};


  useEffect(() => {
    if (query) handleSearch();
  }, [query, filterOption]);

  return (
    <div className="container py-5">

      {/* ------------------ STEP 1: MEDICINE SELECTION ------------------ */}
      {step === 1 && (
        <>
          <h3 className="mb-4 text-center">Search Medicine to Create Prescription</h3>

          {/* Selected Medicines */}
          {selectedMedicines.length > 0 && (
            <div className="mb-3">
              <h5>Rx</h5>
              <textarea
            className="form-control mb-3"
            placeholder="C/o or extra medicine"
            value={patient.notes}
            onChange={e => setNotes(e.target.value)}
          ></textarea>
              <div className="card mt-3">
  <div className="card-header fw-bold">Selected Medicines</div>
  
  <ul className="list-group list-group-flush">
    {selectedMedicines.map((med, index) => (
      <li
        key={med._id}
        className="list-group-item d-flex justify-content-between align-items-start flex-column flex-md-row"
      >
        {/* Left side: number + name */}
        <div className="mb-2 mb-md-0">
          <span className="badge bg-primary me-2">{index + 1}</span>

          <span className="fw-bold text-dark">{med.name}</span>

          <div className="small text-muted mt-1">
            <b>Dose:</b> {med.dose}
          </div>
        </div>

        {/* Right side: remove button */}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => handleRemoveMedicine(med._id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
</div>

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
              placeholder="Search by disease, symptom, complex or medicine name..."
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
                    {med.type =='single' && (
                      <p className="text-muted small mt-1">
                        <b>Potency:</b> {med.potency.join(", ")}
                      </p>
                    )}

                    {med.composition?.length > 0 && (
                      <p className="text-muted small mt-1">
                        <b>Composition:</b> {med.composition.join(", ")}
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

          

          <button className="btn btn-secondary me-2" onClick={() => setStep(1)}>Back</button>
          <button className="btn btn-primary mt-2" onClick={()=>handleSubmitPrescription()}>
            Create Prescription
          </button>
        </div>
      )}


      {/* {
        step===3 && (
          <>
          <PrescriptionView prescription={{patient,notes,medicines:selectedMedicines}} />
          <button className="btn btn-secondary me-2" onClick={() => setStep(2)}>Back</button>
          </>
        )
      } */}
    </div>
  );
};

export default MedicineSearch;

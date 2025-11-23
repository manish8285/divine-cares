import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrescriptionApi } from "../../../api";

// import signature from "../../../assets/signature.png";
 import stamp from "../../../assets/img/stamp_divine.jpg";
import { OrderMedicineSection } from "./common";

const Prescription = () => {
  const { viewToken } = useParams();
  const [prescription, setPrescription] = useState(null);

  const loadPrescription = async () => {
    try {
      const res = await getPrescriptionApi(viewToken);
      console.log(res.data)
      setPrescription(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPrescription();
  }, []);

    const isAfterTargetDate = () => {
    const date = new Date(prescription.createdAt);
    const target = new Date("2025-11-22T23:59:59.999Z"); 
    // anything after 22 Nov 2025
    return date > target;
  };

  if (!prescription) return <div className="container text-center mt-5">Loading...</div>;

  return (
    <>
    <div id="printArea" className="container p-3 p-md-5 bg-white border rounded my-3">
      
      {/* Clinic Header */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">Divine Homoeo Care</h3>
        <div>www.divinehcare.com</div>
        <div>+91-8595040055 • divinecares01@gmail.com</div>
        <hr />
      </div>

      {/* Patient Info */}
      <div className="mb-3">
        <h5 className="fw-bold">Patient Information</h5>
        <table className="table table-borderless small">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{prescription.patient?.name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{prescription.patient?.age}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{prescription.patient?.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{prescription.patient?.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{prescription.patient?.address}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{new Date(prescription.createdAt).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      {prescription.notes && (
        <div className="mb-3">
          <h6 className="fw-bold">Rx:</h6>
          <p>{prescription.notes}</p>
        </div>
      )}

      {/* Medicines */}
      <h5 className="fw-bold">Prescribed Medicines</h5>
      <div className="table-responsive">
        <table className="table table-striped small">
          <thead className="">
            <tr>
              <th>#</th>
              <th>Medicine</th>
              <th>Dosage</th>
            </tr>
          </thead>
          <tbody>
            {prescription.medicines?.map((med, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{med.medicine?.name || med.name}</td>
                <td>{med.medicine?.dose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature & Stamp */}
      <div className="text-end mt-4">
        <img 
  src={stamp}
  alt="Stamp"
  height="100"
  className="me-3 d-inline-block"
/>
        {/* <img src={signature} alt="Signature" height="60" className="d-inline-block" /> */}
      </div>

      {/* Share Buttons */}
 
    </div>

        <div className="container mb-2">
         <div className="mt-4 d-flex gap-3">
        
        {/* WhatsApp share */}
        <a
          className="btn btn-success w-100"
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/91${prescription.patient?.phone}?text=Your prescription link:%0Ahttps://divinehcare.com/prescription/${prescription.viewToken}`}
        >
          Share on WhatsApp
        </a>

        {/* Share Anywhere */}
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            const link = `https://divinehcare.com/prescription/${prescription.viewToken}`;
            if (navigator.share) navigator.share({ title: "Prescription", url: link });
            else window.prompt("Copy link:", link);
          }}
        >
          Share
        </button>

      </div>

      {/* Print Button */}
      <button className="btn btn-dark mt-3 w-100" onClick={() => window.print()}>
        Print Prescription
      </button>
      </div>

      <div>
        { isAfterTargetDate() && (<OrderMedicineSection prescription={prescription} />)

}
      </div>

    </> 
  );
};

export default Prescription;


const PrescriptionView = ({ prescription }) => {
  if (!prescription) return <div>No data</div>;

  const { patient, medicines, notes, createdAt } = prescription;

  return (
    <div style={styles.page}>
      {/* Clinic Header */}
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>Divine Homoeo Care</h2>
        <p style={{ margin: 0 }}>www.divinehcare.com</p>
        <p style={{ margin: 0 }}>Mobile: +91-8595040055 • Email: clinic@example.com</p>
        <hr style={{ marginTop: "10px" }} />
      </div>

      {/* Patient Info */}
      <div style={styles.section}>
        <table>
            <tr>
                <th>Patient</th>
                <td>{patient?.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{patient?.age}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{patient?.phone}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{patient?.email}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{patient?.address}</td>
            </tr>
        </table>
        <p><strong>Date:</strong> { "" +new Date()}</p>
      </div>

      <h4 style={styles.heading}>Prescription</h4>

      {/* Medicines Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine</th>
            <th>Dosage</th>

          </tr>
        </thead>
        <tbody>
          {medicines?.map((med, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{med.name}</td>
              <td>{med.dose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notes */}
      {notes && (
        <div style={styles.section}>
          <strong>Doctor Notes:</strong>
          <p>{notes}</p>
        </div>
      )}

      {/* Footer */}
      <div style={styles.footer}>
        <p>Signature & Stamp</p>
        <hr style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default PrescriptionView;

// Styles
const styles = {
  page: {
    width: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial",
    border: "1px solid #ccc",
    background: "white"
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
  },
  section: {
    marginBottom: "10px",
    lineHeight: "22px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "right",
    marginTop: "30px",
  },
  printButton: {
    marginTop: "15px",
    padding: "10px 15px",
    background: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

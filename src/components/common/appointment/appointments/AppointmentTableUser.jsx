const AppointmentTableUser = ({ appointments }) => {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Problem</th>
            <th>Fee</th>
            <th>Status</th>
            <th>Mode</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="10" className="text-center">
                No appointments found
              </td>
            </tr>
          ) : (
            appointments.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.patient?.name || "-"}</td>
                <td>{item.patient?.phone || "-"}</td>
                <td>{item.patient?.age || "-"}</td>
                <td>{item.patient?.gender || "-"}</td>
                <td>{item.patient?.email || "-"}</td>
                <td>{item.problemDescription || "-"}</td>
                <td>₹{item.feeAmount}</td>
                <td>{item.paymentStatus}</td>
                <td>{item.mode}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
                <td><button className="btn btn-primary">view prescription</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTableUser;

import { NavLink } from "react-router-dom";

const AppointmentTableUser = ({ appointments }) => {
  return (
    <div className="mt-4">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-header bg-white border-0 py-3">
          <h5 className="mb-0 fw-semibold">Your Appointments</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light text-secondary small">
              <tr>
                <th>#</th>
                <th>Patient</th>
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
                  <td colSpan="12" className="text-center py-4 text-muted">
                    No appointments found
                  </td>
                </tr>
              ) : (
                appointments.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>

                    {/* Patient Name */}
                    <td className="fw-semibold">
                      {item.patient?.name || "-"}
                    </td>

                    <td>{item.patient?.phone || "-"}</td>
                    <td>{item.patient?.age || "-"}</td>
                    <td>{item.patient?.gender || "-"}</td>
                    <td>{item.patient?.email || "-"}</td>

                    {/* Problem Description */}
                    <td style={{ maxWidth: "180px" }} className="text-truncate">
                      {item.problemDescription || "-"}
                    </td>

                    <td>
                      <span className="fw-semibold text-success">
                        ₹{item.feeAmount}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          item.paymentStatus === "PAID"
                            ? "bg-success-subtle text-success"
                            : "bg-warning-subtle text-warning"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </td>

                    {/* Mode */}
                    <td>
                      <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                        {item.mode}
                      </span>
                    </td>

                    {/* CreatedAt */}
                    <td className="small text-muted">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>

                    {/* Action Button */}
                   <td>
  {item.viewToken ? (
    <NavLink
      to={`/prescription/${item.viewToken}`}
      className="btn btn-outline-primary btn-sm rounded-3"
    >
      View Prescription
    </NavLink>
  ) : (
    <button className="btn btn-secondary btn-sm rounded-3" disabled>
      Not Available
    </button>
  )}
</td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTableUser;

import { NavLink } from "react-router-dom";

export const HeroOnlineAppointment = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #e3f2ff, #f8fbff)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Best & Affordable  
              <span className="text-primary"> Online Doctor Consultation</span>
            </h1>

            <p className="fs-5 text-secondary mb-4">
              Consult expert homoeopathic doctors online and get a proper  
              <b> prescription, medicine guidance, and treatment plan</b> —  
              all at the lowest consultation fee of  
              <span className="fw-bold text-success"> just ₹99</span>.
            </p>

            <ul className="fs-5 text-dark mb-4" style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="mb-2">✔️ 100% Expert Guidance</li>
              <li className="mb-2">✔️ Digital Prescription Included</li>
              <li className="mb-2">✔️ Safe & Side-Effect Free Treatment</li>
              <li className="mb-2">✔️ Book from Home, No Waiting Time</li>
            </ul>

            {/* CTA Button */}
            <NavLink
              to="/doctors"
              className="btn btn-primary btn-lg px-5 py-3 fw-semibold shadow-sm rounded-pill"
            >
              Book Appointment @ ₹99
            </NavLink>
          </div>

          {/* Right Image / Card */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="p-4 rounded shadow-lg"
              style={{ background: "white", maxWidth: "420px" }}
            >
              <h4 className="fw-bold text-center mb-3 text-primary">
                Trusted Online Consultation
              </h4>
              
              <p className="text-center text-secondary mb-3">
                Connect instantly with experienced homoeopathic specialists.
              </p>

              <div className="d-flex justify-content-between px-2 mb-3">
                <div>
                  <h3 className="text-success fw-bold mb-0">₹99</h3>
                  <small className="text-muted">Consultation Fee</small>
                </div>
                <div>
                  <h3 className="text-primary fw-bold mb-0">24/7</h3>
                  <small className="text-muted">Available</small>
                </div>
              </div>

              <div className="text-center">
                <NavLink
                  to="/doctors"
                  className="btn btn-outline-primary px-4 py-2 rounded-pill"
                >
                  Find Doctors →
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

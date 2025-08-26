import { NavLink } from "react-router-dom";

export const AppointmentBanner = () => {
  return (
    <div
      className="d-md-block col-lg-6 mb-5 mb-lg-0"
    >
      {/* Inner Card */}
      <div
        className="p-5 rounded shadow-lg"
        style={{
          background: "white", // Contrast card
          color: "#333",
        }}
      >
        <div className="mb-4 text-center">
          <h5 className="d-inline-block text-uppercase border-bottom border-3 border-warning pb-2">
            Limited Time Offer 🎉
          </h5>

          <h1 className="display-5 fw-bold mt-3 text-primary">
            Pay ₹1000 & Get FREE Medicines!
          </h1>
        </div>

        <p className="mb-4 fs-5 text-center text-secondary">
          🌿 Take the first step toward <b>natural healing</b> today.  
          Pay only <b>₹1000 consultation fee</b> and get  
          <b> FREE Customized Homoeopathic medicines worth ₹1000 & more!</b>
        </p>

        {/* Why Choose Us Section */}
        <div className="mt-4">
          <h3 className="fw-bold text-center mb-3 text-dark">Why Choose Us?</h3>
          <ul
            className="fs-5"
            style={{ listStyleType: "none", paddingLeft: "1.2rem", color: "#444" }}
          >
            <li className="mb-2"><b>✅</b>Legendary in Homoeopathy since 20th Century</li>
            <li className="mb-2"><b>✅</b>B.H.M.S, M.D. Qualified Doctors</li>
            <li className="mb-2"><b>✅</b>10+ Years of Trusted Experience</li>
            <li className="mb-2"><b>✅</b>Safe & Side-Effect Free Treatments</li>
            <li className="mb-2"><b>✅</b>Thousands of Happy Patients</li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <NavLink
            className="btn btn-outline-primary rounded py-3 px-5 mb-2"
            to="/treatment"
          >
            Explore Treatments
          </NavLink>
        </div>
      </div>
    </div>
  );
};

import { NavLink, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div
      id="auth-layout"
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center shadow-lg rounded-4 overflow-hidden bg-white">
          {/* Left Info Section */}
          <div
            className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5 bg-primary"
            
          >
            <div className="text-center">
              <h1 className="fw-bold mb-3">Welcome to Divine Homoeo Care</h1>
              <p className="fs-5">
                🌿 Experience the power of natural healing with trusted
                homoeopathic care.
              </p>
            </div>

            <div className="mt-4 text-start w-100">
              <h5 className="fw-semibold mb-3">Why Choose Us?</h5>
              <ul className="list-unstyled fs-6">
                <li className="mb-2">✅ 20+ Years of Homoeopathy Legacy</li>
                <li className="mb-2">✅ B.H.M.S, M.D. Qualified Doctors</li>
                <li className="mb-2">✅ Thousands of Happy Patients</li>
                <li className="mb-2">✅ Safe & Side-Effect Free Treatments</li>
                <li className="mb-2">✅ Personalized Consultation</li>
              </ul>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-6 col-md-10 mx-auto p-5">
            <div className="text-center mb-4">
              <h3 className="fw-bold text-primary mb-2">
                First Step Towards Better Life
              </h3>
              <p className="text-secondary mb-4">
                Start your journey toward better health. Get expert advice and
                effective medicines in one place.
              </p>
            </div>

            {/* Dynamic Form Outlet */}
            <div className="p-3 rounded-3 border bg-light-subtle">
              <Outlet />
            </div>

            {/* Login / Signup Links */}
            <div className="text-center mt-4">
              <NavLink
                className="btn btn-primary rounded-pill px-4 py-2 me-2"
                to="login"
              >
                Login
              </NavLink>
              <NavLink
                className="btn btn-outline-primary rounded-pill px-4 py-2"
                to="signup"
              >
                Sign Up
              </NavLink>
            </div>

            {/* Extra Info */}
            <p className="text-center text-muted mt-4 mb-0 small">
              © {new Date().getFullYear()} Divine Homoeo Care — All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

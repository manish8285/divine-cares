import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarCollapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Check screen size (mobile only)
        if (window.innerWidth < 992 && navbarCollapse?.classList.contains("show")) {
          // Collapse menu
          const collapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          collapse.hide();
        }
      });
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          {/* Brand */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src="/logo.svg" width={50} alt="logo" className="me-2" />
            <h1 className="m-0 text-uppercase text-primary fs-4">
              Divine Homoeo Care
            </h1>
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/treatment" className="nav-link">
                  Treatments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/appointment" className="nav-link">
                  Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tests" className="nav-link">
                  Tests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

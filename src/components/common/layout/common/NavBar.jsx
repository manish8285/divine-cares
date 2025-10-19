import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { LogoutButton } from "../../auth";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // ✅ moved here

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarCollapse");

    const handleClick = () => {
      if (window.innerWidth < 992 && navbarCollapse?.classList.contains("show")) {
        const collapse = new window.bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        collapse.hide();
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src="/logo.svg" width={50} alt="logo" className="me-2" />
            <h1 className="m-0 text-uppercase text-primary fs-4">
              Divine Homoeo Care
            </h1>
          </NavLink>

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
                <NavLink to="/products" className="nav-link">
                  Products
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
                {isAuthenticated ? (
                  <div className="nav-link">
                    <p>Welcome {user?.fullName}</p>
                    <LogoutButton />
                  </div>
                ) : (
                  <NavLink to="/auth/login" className="nav-link">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

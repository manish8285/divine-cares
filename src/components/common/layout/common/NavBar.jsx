import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogoutButton } from "../../auth";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../../api";
import { setUser, setAdmin } from "../../../../redux/slices/authSlice";

export const NavBar = () => {
  const { isAuthenticated, isAuthenticatedAdmin, user, admin } = useSelector(
    (state) => state.auth
  );
  const [localUser, setLocalUser] = useState(user);
  const dispatch = useDispatch();

  // Menus
  const publicMenu = [
    { label: "Home", path: "/" },
    { label: "Treatments", path: "/treatment" },
    { label: "Products", path: "/products" },
   { label: "Doctors", path: "/doctors" },
    { label: "Tests", path: "/tests" },
  ];

  const authMenu = [
    // { label: "Doctors", path: "/doctors" },
    { label: "Appointments", path: "/user/appointments" },
    { label: "Prescriptions", path: "/user/prescriptions" },
        // { label: "Home", path: "/" },
    { label: "Treatments", path: "/treatment" },
    { label: "Products", path: "/products" },
    { label: "Doctors", path: "/doctors" },
    { label: "Tests", path: "/tests" },
  ];

  const adminMenu = [
    { label: "Medicine", path: "/medicine" },
    { label: "Prescriptions", path: "/prescriptions" }
  ];

  // Menu selection (ADMIN FIRST)
  let menuToRender;

  if (isAuthenticatedAdmin) {
    console.log("Admin authenticated");
    menuToRender = adminMenu;
  } else if (isAuthenticated) {
    console.log("User authenticated");
    menuToRender = authMenu;
  } else {
    console.log("Public");
    menuToRender = publicMenu;
  }

  // Fetch user only (NOT admin)
  useEffect(() => {
    const fetchUser = async () => {
      if (!isAuthenticated) {
        setLocalUser(null);
        return;
      }

      try {
        const response = await getMe();
        setLocalUser(response.data);
        dispatch(setUser(response.data));
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [isAuthenticated, dispatch]);

  // Close navbar on click
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarCollapse");

    const hideMenu = () => {
      if (window.innerWidth < 992 && navbarCollapse?.classList.contains("show")) {
        new window.bootstrap.Collapse(navbarCollapse).hide();
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", hideMenu));

    return () =>
      navLinks.forEach((link) =>
        link.removeEventListener("click", hideMenu)
      );
  }, []);

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <style>{`
        .nav-link {
          font-size: 0.95rem !important;
          padding: 8px 14px !important;
          color: #444 !important;
          font-weight: 500;
        }
        .nav-link:hover {
          color: #0d6efd !important;
          background: #f1f5ff;
          border-radius: 6px;
        }
        .navbar-brand h1 {
          font-size: 1.15rem !important;
        }
      `}</style>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2">

          {/* Logo */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src="/logo.svg" width={40} alt="logo" className="me-2" />
            <h1 className="m-0 text-primary fw-bold">Divine Homoeo Care</h1>
          </NavLink>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              {menuToRender.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink to={item.path} className="nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {/* Auth Buttons */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                {isAuthenticated || isAuthenticatedAdmin ? (
                  <div className="d-flex align-items-center gap-3">
                    <LogoutButton />
                  </div>
                ) : (
                  <NavLink
                    to="/auth/login"
                    className="btn btn-primary btn-sm px-3"
                  >
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

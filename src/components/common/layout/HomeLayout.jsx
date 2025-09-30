import { NavLink, Outlet } from "react-router-dom";
import { Footer, NavBar, TopBar } from "./common";

export const HomeLayout = () => {
  return (
    <div>
      <TopBar />
      <NavBar />

      <Outlet />

      <Footer />
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};

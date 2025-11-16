import { useDispatch } from "react-redux";
import { logout, logoutAdmin } from "../../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {

  let navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear both user and admin sessions safely
    dispatch(logout());
    dispatch(logoutAdmin());

    // Redirect after logout
    navigate("/")
  };

  return (
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

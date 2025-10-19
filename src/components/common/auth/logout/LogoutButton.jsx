import { useDispatch } from "react-redux"
import { logout } from "../../../../redux/slices/authSlice"

export const LogoutButton=()=>{
    const dispatch = useDispatch()
    return (
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
    )
}
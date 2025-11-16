import { useState } from "react";
import { toast } from "react-toastify";
import {  signinAdminApi } from "../../../../api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccessAdmin } from "../../../../redux/slices/authSlice";


export const LoginAdmin=()=>{

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState();
    const [userData, setUserData] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate()
    const redirect = searchParams.get("redirect")
    const dispatch = useDispatch()
  
    const submitHandler = async (e) => {
      e.preventDefault()
      console.log('admin login ->',userData);
      try {
        setProcessing(true);
        setMessage("");
        const response = await signinAdminApi(userData);
        console.log(response);
        dispatch(loginSuccessAdmin({tokenAdmin:response.data.token}));
        toast.success("You have loged in successfully");
        

        // const user = await getMe()
        // console.log("user",user)

        // dispatch(loginSuccess(user.data))

        if(redirect){
            navigate(redirect)
        }else{
            navigate("/medicine")
        }
        
      } catch (error) {
        console.log(error.response);
        toast.error(error.response.data.message);
      }
      setProcessing(false);
    };

    return (
        <div className="bg-white text-center rounded p-5 h-100 w-100">
        <h1 className="mb-4">Login </h1>
        <form>
          <div className="row g-3">
            <div className="col-12 col-sm-12">
              <input
                type="email"
                className="form-control bg-light border-0"
                placeholder="Your Email"
                style={{ height: 55 }}
                value={userData.email}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    email: event.target.value,
                  })
                }
              />
            </div>
            <div className="col-12 col-sm-12">
              <input
                type="password"
                className="form-control bg-light border-0"
                placeholder="Your Password"
                style={{ height: 55 }}
                value={userData.password}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    password: event.target.value,
                  })
                }
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                disabled={processing}
                className="btn btn-warning w-100 py-3"
                onClick={(e) => submitHandler(e)}
              >
                {processing ? "processing..." : "Log In Now"}
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

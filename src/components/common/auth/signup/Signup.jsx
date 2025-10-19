import { useState } from "react";
import { toast } from "react-toastify";
import { signupApi } from "../../../../api";
import { useNavigate } from "react-router-dom";

export const SignUp=()=>{

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState();
    const [userData, setUserData] = useState({});
    let navigate = useNavigate()
  
    const submitHandler = async (e) => {
        e.preventDefault(); // ✅ Prevent page reload
    
        try {
          setProcessing(true);
    
          // Call API
          const response = await signupApi(userData);
    
          toast.success("Your account has been created successfully 🎉");
    
          // Navigate after short delay (optional UX improvement)
          setTimeout(() => {
            navigate("/auth/login");
          }, 1000);
        } catch (error) {
          console.error(error);
          toast.error(
            error?.response?.data?.message || "Something went wrong. Please try again."
          );
        } finally {
          setProcessing(false);
        }
      };

    return (
        <div className="bg-white text-center rounded p-5 h-100 w-100">
        <h1 className="mb-4">Create An Account</h1>
        <form>
          <div className="row g-3">
            <div className="col-12 col-sm-12">
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="Your Name"
                style={{ height: 55 }}
                value={userData.fullName}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    fullName: event.target.value,
                  })
                }
              />
            </div>
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
                placeholder="Create Password"
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
            <div className="col-12 col-sm-12">
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="Mobile Number"
                style={{ height: 55 }}
                value={userData.phoneNumber}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    phoneNumber: event.target.value,
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
                {processing ? "processing..." : "Create Now"}
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

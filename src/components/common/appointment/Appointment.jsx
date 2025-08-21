import { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeAppointmentApi } from "../../../api";
import { toast } from "react-toastify";
import QR from "../../../assets/img/QR.jpeg";
export const Appointment = () => {
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState();
  const [appointmenetdata, setAppointmentdata] = useState({});

  const submitHandler = async () => {
    console.log(appointmenetdata);
    try {
      setProcessing(true);
      setMessage("");
      const response = await makeAppointmentApi(appointmenetdata);
      console.log(response);
      toast.success(response.message);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
    setProcessing(false);
  };

  return (
    <>
      {/* Appointment Start */}
      <div
        id="makeAppointment"
        className="container-fluid bg-primary my-5 py-5"
      >
        <div className="container py-5">
          <div className="row gx-5">
            <div className="d-none d-md-block col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                  Appointment
                </h5>

                <h1 className="display-4">
                  Make An Appointment For You Or Your Family
                </h1>
              </div>
              <p className="text-white mb-5">
                Take the first step toward better health for you and your
                family. Our expert homoeopathic doctors are here to help you
                with personalized, natural treatments — no side effects, no
                hassle.
                <br></br>
                ✅ Trusted by hundreds of families
                <br />
                ✅ Safe for all ages
                <br />
                ✅ Online & in-clinic appointments available
                <br />
                Don’t wait — book your appointment now and start your healing
                journey!.
              </p>

              <NavLink
                className="btn btn-dark rounded-pill py-3 px-5 me-3 mb-3"
                to="/treatment"
              >
                Find Treatments
              </NavLink>
              <NavLink
                className="btn btn-outline-dark rounded-pill py-3 px-5 mb-3"
                to="/service"
              >
                Find Services
              </NavLink>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Book An Appointment</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={appointmenetdata.mode}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            mode: event.target.value,
                          })
                        }
                      >
                        <option disabled selected>
                          Choose Mode
                        </option>
                        <option value={"online"}>
                          Online (Whatsapp/ Call)
                        </option>
                        <option value={"offline"}>
                          Offline (At Clinic, Gurgaon)
                        </option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={appointmenetdata.sex}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            sex: event.target.value,
                          })
                        }
                      >
                        <option selected>Sex</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                        value={appointmenetdata.name}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Age"
                        style={{ height: 55 }}
                        value={appointmenetdata.age}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            age: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                        value={appointmenetdata.email}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            email: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Mobile Number"
                        style={{ height: 55 }}
                        value={appointmenetdata.phoneNumber}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            phoneNumber: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Describe something about your problems"
                        style={{ height: 55 }}
                        value={appointmenetdata.problems}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            problems: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <img width={100} src={QR} alt="qr" />
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                      <p>
                        Scan this QR code OR UPI divinehc@ybl to pay Rs 200/-
                      </p>
                    </div>
                    {/* <div className="col-12 col-sm-6">
                  <div className="date" id="date" data-target-input="nearest">
                    <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div> */}
                    {/* <div className="col-12 col-sm-6">
                  <div className="time" id="time" data-target-input="nearest">
                    <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div> */}

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Last 4 digits of your transaction id"
                        required
                        style={{ height: 55 }}
                        value={appointmenetdata.transId}
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            transId: event.target.value,
                          })
                        }
                      />
                    </div>


                    <div className="col-12">
                      <button
                        disabled={processing}
                        className="btn btn-primary w-100 py-3"
                        onClick={() => submitHandler()}
                      >
                        {processing ? "processing..." : "Make Appointment"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </>
  );
};

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeAppointmentApi } from "../../../api";
import { toast } from "react-toastify";
import QR from "../../../assets/img/QR.jpeg";
import { AppointmentBanner } from "./AppointmentBanner";

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
        className="container-fluid bg-primary py-5"
      >
        <div className="container py-5">
          <div className="row gx-5">
            <AppointmentBanner />
            <div className="col-lg-6 appointment-form d-flex">
              <div className="bg-white text-center rounded p-5 h-100 w-100">
                <h1 className="mb-4">Book An Appointment</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={appointmenetdata.mode}
                        disabled
                        onChange={(event) =>
                          setAppointmentdata({
                            ...appointmenetdata,
                            mode: event.target.value,
                          })
                        }
                      >
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
                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center text-center">
                      <div>
                        <p>Scan this QR code OR UPI</p>
                        <p>
                          <b>divinehc@ybl</b>
                        </p>
                        <p>to pay <b>Rs 300/-</b></p>
                      </div>
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
                        className="btn btn-warning w-100 py-3"
                        onClick={() => submitHandler()}
                      >
                        {processing ? "processing..." : "Book Appointment Now"}
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

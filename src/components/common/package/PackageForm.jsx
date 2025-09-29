import { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeAppointmentApi } from "../../../api";
import { toast } from "react-toastify";
import QR from "../../../assets/img/QR.jpeg";

export const PackageForm = ({title,duration}) => {

  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState();
  const [appointmenetdata, setAppointmentdata] = useState({});
  const [totalAmount, setTotalAmount] = useState(1000);


  duration= {
    "15 days":1000,
    "1 month":2000,
  }


  const durationChangeHandler=(key)=>{
      console.log(key)
      const amount = duration[key]
      setTotalAmount(amount)
      setAppointmentdata({...appointmenetdata,'mode':'Package '+ ' '+title+' ' +key})
  }

  const submitHandler = async () => {
    console.log(appointmenetdata);
    try {
      setProcessing(true);
      setMessage("");
      const response = await makeAppointmentApi(appointmenetdata);
      console.log(response);
      toast.success("Thank you for buying package, you will receive our call/whatsapp soon");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
    setProcessing(false);
  };

  return (
    <>
            <div className="appointment-form d-flex">

              <div className="bg-white border border-primary text-center rounded p-5 h-100 w-100">
                <h1 className="mb-0">Buy Package</h1>
                <h2 className="text-primary mb-4">{title}</h2>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        onChange={(event) =>
                          durationChangeHandler(event.target.value)
                        }
                      >
                        <option disabled selected>
                          Choose Duration
                        </option>
                        <option id="15" value={"d15 days"}>
                          15 Days (1 Consultation + 15 Day Medicine)
                        </option>
                        <option id="30" value={"1 month"}>
                          1 Month (2 consultation + 1 month Medicine)
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
                        <p>to pay <b>Rs {totalAmount}/-</b></p>
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
                        placeholder="UTR number of payment"
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
                        {processing ? "processing..." : "Buy Package Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
    </>
  );
};

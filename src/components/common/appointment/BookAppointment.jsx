import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { bookAppointmentApi } from "../../../api";
import { useSelector } from "react-redux";
import QR from "../../../assets/img/QR.jpeg";

export const BookAppointment = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const params = useParams();
  const doctorId = params.doctorId;
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/auth/login?redirect=${location.pathname}`);
    }
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    problemDescription: "",
    transactionId: "",
    mode: "Online",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      doctorId,
      patient: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        gender: form.gender,
        age: Number(form.age),
      },
      problemDescription: form.problemDescription,
      transactionId: form.transactionId,
      mode: form.mode,
      feeAmount: 100,
    };

    try {
      setLoading(true);
      await bookAppointmentApi(payload);
      alert("Appointment booked successfully!");
      navigate('/appointments')
    } catch (error) {
      console.error(error);
      alert("Booking failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Modern Styling */}
      <style>{`
        .page-header {
          background: linear-gradient(135deg, #e2f3ff, #f8faff);
          padding: 40px 0;
          text-align: center;
          border-radius: 0 0 30px 30px;
          margin-bottom: 30px;
        }

        .form-card {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .form-card label {
          font-weight: 600;
          color: #333;
        }

        .payment-box {
          padding: 20px;
          background: #f5faff;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          text-align: center;
        }

        .payment-box img {
          border-radius: 12px;
          width: 140px;
          margin-bottom: 10px;
        }

        .btn-primary {
          border-radius: 10px;
          font-size: 18px;
          padding: 10px 20px;
        }
      `}</style>

      {/* Header */}
      <div className="page-header">
        <h2 className="fw-bold text-primary mb-2">Book Your Appointment</h2>
        <p className="text-muted">Consult a verified doctor for just ₹100 <br></br>You will get call / whatsapp as soon as possible</p>
        <p className="text-muted"></p>
      </div>

      {/* Form */}
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="form-card mx-auto">

          <h4 className="mb-4 fw-bold text-secondary">Patient Details</h4>

          <form onSubmit={handleSubmit} className="row g-4">
            
            {/* Name */}
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select form-select-lg"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Age */}
            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control form-control-lg"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>

            {/* Problem */}
            <div className="col-12">
              <label className="form-label">Symptoms / Problem Description</label>
              <textarea
                className="form-control form-control-lg"
                name="problemDescription"
                rows="3"
                value={form.problemDescription}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Payment Section */}
            <div className="col-12 mt-4">
              <h4 className="fw-bold text-secondary mb-3">Payment (₹100)</h4>
              <div className="payment-box d-flex justify-content-between flex-wrap align-items-center">
                <img src={QR} alt="QR" />

                <div className="text-center flex-grow-1">
                  <p className="mb-1">Scan the QR or Pay via UPI</p>
                  <h5 className="fw-bold text-primary">divinehc@ybl</h5>
                  <p className="mt-1 mb-0">Pay <b>₹100</b> and enter last 4 digits of UTR</p>
                </div>
              </div>
            </div>

            {/* UTR */}
            <div className="col-md-6 mt-3">
              <label className="form-label">Last 4 digits of UTR</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="transactionId"
                value={form.transactionId}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mode */}
            <div className="col-md-6 mt-3">
              <label className="form-label">Consultation Mode</label>
              <select
                className="form-select form-select-lg"
                name="mode"
                disabled={true}
                value={form.mode}
                onChange={handleChange}
              >
                <option value="Online">Online / call / whatsapp</option>
              </select>
            </div>

            {/* Submit */}
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn btn-primary w-100 py-3 fw-bold"
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm Appointment"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

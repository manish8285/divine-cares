import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { bookAppointmentApi } from "../../../api";
import { useSelector } from "react-redux";

export const BookAppointment = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    let navigate = useNavigate()
    let params = useParams()
    let doctorId = params.doctorId
    const location = useLocation()

    
    useEffect(()=>{
        if(!isAuthenticated){
        navigate(`/auth/login?redirect=${location.pathname}`)
    }
    },[])


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

    if (!doctorId) {
      alert("Doctor ID missing");
      return;
    }

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
      feeAmount: 100, // fixed as per your dataset
    };

    try {
      setLoading(true);
      const res = await bookAppointmentApi(payload);
      alert("Appointment booked successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Booking failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4">
      <h3 className="mb-3">Book Appointment</h3>

      <form onSubmit={handleSubmit} className="row g-3">

        {/* Patient Name */}
        <div className="col-md-6">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
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
            className="form-select"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
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
            className="form-control"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Problem Description */}
        <div className="col-12">
          <label className="form-label">Problem / Symptoms</label>
          <textarea
            className="form-control"
            name="problemDescription"
            rows="3"
            value={form.problemDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Transaction ID */}
        <div className="col-md-6">
          <label className="form-label">Lst 4 digits of UTR number</label>
          <input
            type="text"
            className="form-control"
            name="transactionId"
            value={form.transactionId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mode */}
        <div className="col-md-6">
          <label className="form-label">Mode</label>
          <select
            className="form-select"
            name="mode"
            value={form.mode}
            onChange={handleChange}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Submit */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </div>
      </form>
    </div>
  );
};


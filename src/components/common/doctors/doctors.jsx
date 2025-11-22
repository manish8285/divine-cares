import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDoctorsApi } from "../../../api";

// ----------------------
// Modern Search Component
// ----------------------
const SearchDoctor = ({ onSearch }) => {
  const [category, setCategory] = useState("Homoeopathic");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch({ category, keyword });
  };

  return (
    <>
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #e3f7ff 0%, #f7faff 100%);
          padding: 80px 0;
        }
        .search-box {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        }
        .doctor-card {
          border-radius: 18px !important;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }
        .doctor-img {
          border-radius: 18px 0 0 18px;
          object-fit: cover;
        }
      `}</style>

      <div className="hero-section text-center">
        <div className="container">
          <h5 className="text-primary fw-bold">Find a Doctor</h5>
          <h1 className="display-5 fw-bold mb-3">
            Search Verified Healthcare Specialists
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: 650 }}>
            Get expert consultation from verified doctors for just{" "}
            <span className="text-success fw-bold">₹100</span>.  
            Search by name, specialization, or category and book your appointment instantly.
          </p>

          {/* Search Box */}
          <div className="search-box mx-auto mt-4 p-4" style={{ maxWidth: 700 }}>
            <div className="row g-3">
              <div className="col-md-4">
                <select
                  disabled
                  className="form-select form-select-lg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Homoeopathic">Homoeopathic</option>
                  <option value="Male Doctor">Male Doctor</option>
                  <option value="Female Doctor">Female Doctor</option>
                  <option value="General Physician">General Physician</option>
                </select>
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search by name or keyword…"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div className="col-md-3 d-grid">
                <button className="btn btn-primary btn-lg" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// --------------------------------------
// Modern Doctors List Component
// --------------------------------------
export const Doctors = () => {
  const [results, setResults] = useState([]);

  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  const handleSearch = ({ category, keyword }) => {
    const filtered = results.filter(
      (doc) =>
        doc.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
        doc.title.toLowerCase().includes(keyword.toLowerCase()) ||
        doc.about.toLowerCase().includes(category.toLowerCase())
    );
    setResults(filtered);
  };

  const loadDoctors = async () => {
    try {
      const res = await getDoctorsApi();
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <>
      {/* Search Section */}
      <SearchDoctor onSearch={handleSearch} />

      {/* Results */}
      <div className="container py-5">
        <div className="row g-4">
          {results.length > 0 ? (
            results.map((doctor) => (
              <div key={doctor._id} className="col-lg-6 col-md-6">
                <div className="doctor-card bg-white d-flex p-0">
                  <div className="col-5">
                    <img
                      src={IMAGE_URL + doctor.profile}
                      className="doctor-img w-100 h-100"
                      alt={doctor.fullName}
                    />
                  </div>

                  <div className="col-7 p-4 d-flex flex-column">
                    <h4 className="fw-bold">{doctor.fullName}</h4>
                    <p className="text-primary fw-semibold mb-2">{doctor.title}</p>
                    <p className="text-muted small text-justify" style={{ minHeight: 70 }}>
                      {doctor.about.substring(0, 250)}...
                    </p>

                    <div className="mt-auto">
                      <NavLink
                        to={`/book-appointment/${doctor._id}`}
                        className="btn btn-primary w-100 py-2 rounded-pill"
                      >
                        Book Appointment
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h5>No doctors found. Try another search.</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

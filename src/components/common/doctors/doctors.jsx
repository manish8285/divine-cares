import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDoctorsApi } from "../../../api";

// 🔍 SearchDoctor Subcomponent
const SearchDoctor = ({ onSearch }) => {
  const [category, setCategory] = useState("Homoeopathic");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch({ category, keyword });
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Find A Doctor
          </h5>
          <h1 className="display-5 mb-3">Find A Healthcare Professional</h1>
          <h5 className="fw-normal mb-3">
            Get an expert consultation from top verified doctors for just{" "}
            <span className="text-success fw-bold">₹100</span>.  
            You can easily search for doctors by name, specialization, or category
            and book your appointment online in just a few clicks.  
            Our platform connects you with qualified professionals who are ready to
            provide affordable and effective healthcare consultations.
          </h5>
        </div>
        <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
          <div className="input-group">
            <select
              className="form-select border-primary w-25"
              style={{ height: 60 }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Homoeopathic">Homoeopathic</option>
              <option value="Male Doctor">Male Doctor</option>
              <option value="Female Doctor">Female Doctor</option>
              <option value="General Physician">General Physician</option>
            </select>
            <input
              type="text"
              className="form-control border-primary w-50"
              placeholder="Keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn btn-dark border-0 w-25" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🩺 Main Doctors Component
export const Doctors = () => {
  const [results, setResults] = useState([]);

  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  const handleSearch = ({ category, keyword }) => {
    console.log("Searching for:", category, keyword);
    // Replace below mock data with API call if needed


    const filtered = results.filter(
      (doc) =>
        doc.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
        doc.title.toLowerCase().includes(keyword.toLowerCase()) ||
        doc.about.toLowerCase().includes(category.toLowerCase())
    );

    setResults(filtered);
  };

  const loadDoctors=async()=>{
    try{

       const res = await getDoctorsApi();
       setResults(res.data)

    }catch(error){
        console.log(error)
    }
  }

  useEffect(()=>{
    loadDoctors()
  })

  return (
    <div>
      {/* Search Section */}
      <SearchDoctor onSearch={handleSearch} />

      {/* Search Results */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {results.length > 0 ? (
              results.map((doctor) => (
                <div key={doctor.id} className="col-lg-6 team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <img
                        className="img-fluid h-100"
                        src={IMAGE_URL+doctor.profile}
                        style={{ objectFit: "contain" }}
                        alt={doctor.name}
                      />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>{doctor.fullName}</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          {doctor.title}
                        </h6>
                        <p className="m-0">
                          {doctor.about}
                        </p>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <NavLink to={`/book-appointment/${doctor._id}`} className="btn btn-primary rounded-pill py-md-3 px-md-5 mx-2 w-full">Book Appointment</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h5>No doctors found. Try searching with a keyword.</h5>
              </div>
            )}

            {results.length > 0 && (
              <div className="col-12 text-center">
                <button className="btn btn-primary py-3 px-5">Load More</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

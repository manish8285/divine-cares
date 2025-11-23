import React from "react";
import { useNavigate } from "react-router-dom";

const OrderMedicineSection = ({ prescription }) => {
  const navigate = useNavigate();

  const goToCreateOrder = () => {
    navigate(`/create-order`,{state:{prescription}});
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Section */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Order Medicines Easily</h2>
            <p className="text-muted fs-5">
              Your prescription is ready. You can now quickly place an order for all
              the medicines prescribed by your doctor.  
            </p>
            <p className="text-muted">
              Select delivery options, choose an address, and confirm your order in
              just a few clicks. Fast, simple, and reliable.
            </p>

            <button
              onClick={goToCreateOrder}
              className="btn btn-primary btn-lg px-4 mt-3 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              <i className="bi bi-bag-plus me-2"></i>
              Order Medicine
            </button>
          </div>

          {/* Illustration Section */}
          <div className="col-lg-5 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966483.png"
              alt="Order Medicine"
              className="img-fluid"
              style={{
                maxWidth: "280px",
                filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMedicineSection;

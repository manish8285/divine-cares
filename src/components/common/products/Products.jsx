import { NavLink } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export const Products = () => {
  const items = [
    {
      name: "Hair Oil",
      size: "100ml",
      price: 390,
      bannerImage: "hair_oil_poster.png",
    },
    {
      name: "Skin Oil",
      size: "100ml",
      price: 390,
      bannerImage: "skin_oil_poster.png",
    },
    {
      name: "Face Spray",
      size: "100ml",
      price: 390,
      bannerImage: "acne_poster.png",
    },
  ];

  return (
    <div id="products" className="bg-light py-5">
      <div className="container text-center">
        {/* Title */}
        <h5 className="text-uppercase text-primary fw-bold mb-2">
          Our Handmade Products
        </h5>
        <h1 className="display-5 fw-bold mb-4">DHC Products</h1>
        <p className="text-muted mb-5">
          100% natural, chemical-free & clinically tested homoeopathic wellness
          products.
        </p>

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <NavLink
                to="https://hair-oil.divinehcare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div
                  className="card border-0 shadow-sm rounded-4 overflow-hidden h-100"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={`${IMAGE_URL}${item.bannerImage}`}
                      alt={item.name}
                      className="img-fluid w-100"
                      style={{
                        objectFit: "contain",
                        backgroundColor: "#f9f9f9",
                        padding: "10px",
                      }}
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="card-body text-center">
                    <h4 className="fw-bold text-dark">{item.name}</h4>
                    <p className="text-muted mb-2">{item.size}</p>
                    <h5 className="text-primary fw-semibold">₹ {item.price}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

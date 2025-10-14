import { NavLink } from "react-router-dom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export const Products = () => {
  const items = [
    {
      name: "Hair Oil",
      startingPrice: 400,
      coverImage: "https://hair-oil.divinehcare.com/img/hair-oil-2.png",
      bannerImage: "hair-oil-cover.png",
    },
  ];

  return (
    <div id="products">
      {/* Section Title */}
      

      {/* Blue Section */}
      <div className="container-fluid bg-primary py-5">
        <div className="container py-3">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h5 className="d-inline-block text-uppercase border-bottom border-5 border-white">Our Handmade Products</h5>
            <h1 className="display-4">DC Products</h1>
      </div>

          <div className="row g-4 justify-content-center align-items-center">
            {items.map((item, index) => (
              <div key={index} className="col-lg-10 col-md-12">
                <div className="row align-items-center shadow-sm rounded bg-white p-3 m-0">
                  
                  {/* Product Image & Info */}
                  <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                    <img
                      src={item.coverImage}
                      alt={item.name}
                      className="img-fluid mb-3 rounded"
                      style={{ maxHeight: 250, objectFit: "contain" }}
                    />
                    <h4 className="fw-bold mb-2">{item.name}</h4>
                    <h5 className="text-primary mb-3">
                      Starts from Rs. {item.startingPrice}/-
                    </h5>
                    <NavLink
                      to="https://hair-oil.divinehcare.com"
                      className="btn btn-warning rounded-pill py-2 px-4 fw-semibold shadow-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy 
                    </NavLink>
                  </div>

                  {/* Banner Image */}
                  <div className="col-lg-6 col-md-12 text-center">
                    <NavLink
                      to="https://hair-oil.divinehcare.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${IMAGE_URL}${item.bannerImage}`}
                        alt={`${item.name} Banner`}
                        className="img-fluid rounded"
                        style={{
                          objectFit: "contain",
                          maxHeight: 420,
                          width: "100%",
                        }}
                      />
                    </NavLink>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";

const product = {
  name: "Divine Skin Glow Oil",
  category: "Skin Oil",
  price: 299,
  deliveryCharge: 40,
  description: "A powerful homoeopathic formulation for glowing skin.",
  about: "Made with herbal extracts and safe homoeopathic ingredients.",
  usage: "Apply twice daily on clean skin.",
  benefits: [
    "Reduces pigmentation",
    "Adds glow",
    "Improves texture",
    "Safe for all skin types"
  ],
  images: [
    "https://via.placeholder.com/600x600?text=Image1",
    "https://via.placeholder.com/600x600?text=Image2",
    "https://via.placeholder.com/600x600?text=Image3"
  ],
  faqs: [
    { q: "Is this suitable for all skin types?", a: "Yes, 100% safe." },
    { q: "Any side effects?", a: "No known side effects." }
  ]
};

export default function SingleProductPage() {
  const [mainImage, setMainImage] = useState("");
  const [city, setCity] = useState("Gurgaon"); // You can detect from user location

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* PRODUCT SECTION */}
      <div className="row g-4">

        {/* LEFT: IMAGES */}
        <div className="col-md-6">
          <div className="p-3 border rounded shadow-sm bg-white">
            <img
              src={mainImage}
              alt={product.name}
              className="img-fluid rounded mb-3"
              style={{ height: "420px", objectFit: "contain", width: "100%" }}
            />

            {/* Thumbnails */}
            <div className="d-flex gap-2 flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="img-thumbnail small-thumb"
                  onClick={() => setMainImage(img)}
                  style={{
                    width: "80px",
                    height: "80px",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="col-md-6">

          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.category}</p>

          {/* PRICE */}
          <h3 className="fw-bold">
            ₹{product.price} <span className="fs-6 text-muted">(incl. taxes)</span>
          </h3>

          {/* DELIVERY CHARGE */}
          <p className="text-muted mt-1">
            <strong>Delivery Charge:</strong> ₹{product.deliveryCharge}
          </p>

          {/* EXPECTED DELIVERY */}
          <div className="alert alert-success p-2 mt-3">
            <strong>Expected Delivery:</strong>{" "}
            {city === "Gurgaon" ? "Same Day Delivery" : "5 Days"}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-3 text-muted">{product.description}</p>

          {/* QUANTITY SELECT */}
          <div className="mt-4">
            <label className="fw-semibold">Quantity</label>
            <select className="form-select w-50 mt-1">
              <option>1 Unit</option>
              <option>2 Units</option>
              <option>3 Units</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-dark px-4 py-2">Buy Now</button>
            <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* ABOUT / BENEFITS */}
      <div className="row mt-5">
        <div className="col-md-8">
          <h4 className="fw-bold">About This Product</h4>
          <p className="text-muted">{product.about}</p>

          {/* BENEFITS */}
          {product.benefits?.length > 0 && (
            <>
              <h5 className="fw-bold mt-4">Benefits</h5>
              <ul className="text-muted">
                {product.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          )}

          {/* USAGE */}
          {product.usage && (
            <>
              <h5 className="fw-bold mt-4">How to Use</h5>
              <p className="text-muted">{product.usage}</p>
            </>
          )}
        </div>
      </div>

      {/* FAQ / RAQS */}
      <div className="mt-5">
        <h4 className="fw-bold mb-3">FAQs</h4>

        <div className="accordion" id="faqAccordion">
          {product.faqs?.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .small-thumb:hover {
          border: 2px solid #000;
        }
      `}</style>
    </div>
  );
}

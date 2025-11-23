import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  createAddressApi,
  createOrderByAdminApi,
  createOrderByUserApi,
  getMyAddressApi,
} from "../../../api";

import qrCodeImage from "../../../assets/img/QR.jpeg";

// -----------------------------------------------------
// PRICE & SIZE TABLE (CLEAN)
// -----------------------------------------------------
const MEDICINE_DATA = {
  complex: {
    duration:{"15":"15ml","30":"30ml"},
    sizes: ["15ml", "30ml", "60ml"],
    price: { "15ml": 200, "30ml": 400 },
  },
  trituration: {
    duration:{"15":"30g","30":"60g"},
    sizes: ["30g", "60g"],
    price: { "30g": 200, "60g": 400 },
  },
  oil: {
    duration:{"15":"90ml","30":"90ml"},
    sizes: ["90ml"],
    price: { "90ml": 300 },
  },
  ointment: {
    duration:{"15":"25ml","30":"25ml"},
    sizes: ["25ml"],
    price: { "25ml": 200 },
  },
  complexoil: {
    duration:{"15":"100ml","30":"100ml"},
    sizes: ["100ml"],
    price: { "100ml": 400 },
  },
  single: {
    duration:{"15":"15ml","30":"30ml"},
    sizes: ["15ml","30ml"],
    price: { "15ml":200,"30ml": 400 },
  },
  other: {
    duration:{"15":"other","30":"other"},
    sizes: ["other"],
    price: { "other": 400 },
  },
};

// -----------------------------------------------------

const DELIVERY_CHARGE = 70;

const DURATION_OPTIONS = [
  { value: "15", label: "15 Days" },
  { value: "30", label: "1 Month" },
 // { value: "custom", label: "Custom" },
];

const CreateOrderFromPrescription = () => {
  const { state } = useLocation();
  const prescription = state?.prescription;
  console.log(prescription)

  const { isAuthenticatedAdmin, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  
  if (!prescription) return <p>No Prescription Data Found</p>;

  const { patient, medicines } = prescription;

  // -------------------------------------
  // ADDRESS STATES
  // -------------------------------------
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  // -------------------------------------
  // ORDER STATES
  // -------------------------------------
  const [duration, setDuration] = useState("15");
  const [selfPickup, setSelfPickup] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId] = useState("divinehc@ybl");
  const [utrNo, setUtrNo] = useState("");

  // -------------------------------------
  // PREPARE ITEMS CLEANLY
  // -------------------------------------
  const [items, setItems] = useState(
      medicines.map((m) => {
      const type = (m.type || "other").toLowerCase();
      const defaultSize = MEDICINE_DATA[type].duration[duration];
      const size = MEDICINE_DATA[type].duration[duration];

      return {
        id: m._id,
        name: m.name,
        dosage: m.dosage,
        type,
        size,
        price: MEDICINE_DATA[type].price[size] || 400,
        total : MEDICINE_DATA[type].price[size] || 400
      };
    })


  );

  // -------------------------------------
  // ON SIZE CHANGE
  // -------------------------------------
  const changeSize = (index, newSize) => {
    const updated = [...items];
    updated[index].size = newSize;
    updated[index].type = updated[index].type.toLowerCase();
    updated[index].price = MEDICINE_DATA[updated[index].type].price[newSize] || 400;
    updated[index].total = MEDICINE_DATA[updated[index].type].price[newSize] || 400;
    setItems(updated);
  };


useEffect(()=>{
  
  const updatedItems = items.map((m) => {
      const type = m.type || "other";
      const SIZE = MEDICINE_DATA[m.type].duration[duration]

      return {
        id: m.id,
        name: m.name,
        dosage: m.dosage,
        type,
        size: SIZE,
        price: MEDICINE_DATA[type].price[SIZE] || 400,
        total: MEDICINE_DATA[type].price[SIZE] || 400,
      };
    })
  setItems(updatedItems)
  
},[duration])


  // -------------------------------------
  // SUBTOTAL & FINAL TOTAL
  // -------------------------------------
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  const finalTotal = subtotal + (selfPickup ? 0 : DELIVERY_CHARGE);

  // -------------------------------------
  // LOAD USER ADDRESSES
  // -------------------------------------
  const loadMyAddresses = async () => {
    try {
      if (!isAuthenticated) return;
      const res = await getMyAddressApi({ userId: user._id });
      setAddresses(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    if(!isAuthenticated) {
    navigate("/auth/login")
  }

    loadMyAddresses();
  }, []);

  // -------------------------------------
  // ADD ADDRESS
  // -------------------------------------
  const handleAddNewAddress = async () => {
    try {
      for (let field of ["name", "phone", "street", "city", "state", "postalCode"]) {
        if (!newAddress[field]) {
          alert("Please fill all fields");
          return;
        }
      }

      const payload = { ...newAddress, userId: user?._id };

      const res = await createAddressApi(payload);

      setAddresses([...addresses, res.data]);
      setSelectedAddressId(res.data._id);

      setNewAddress({
        name: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // -------------------------------------
  // SUBMIT ORDER
  // -------------------------------------
  const handleSubmit = async () => {
    try {
      if (isAuthenticated && !utrNo) {
        alert("UTR No Required");
        return;
      }

      if (!selfPickup && !selectedAddressId) {
        alert("Address Required");
        return;
      }

      const orderPayload = {
        admin: prescription.createdBy,
        user: user?._id,
        patient,
        items,
        duration,
        billingAddress: addresses.find((x) => x._id === selectedAddressId),
        shippingAddress: selfPickup
          ? null
          : addresses.find((x) => x._id === selectedAddressId),
        selfPickup,
        paymentMethod,
        transactionId: utrNo,
        deliveryCharge: selfPickup ? 0 : DELIVERY_CHARGE,
        totalAmount: finalTotal,
      };

      if (isAuthenticated) {
        await createOrderByUserApi(orderPayload);
        navigate("/user/orders");
      } else if (isAuthenticatedAdmin) {
        const res = await createOrderByAdminApi(orderPayload);
        navigate(`/order/${res.data.viewToken}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // --------------------------------------------------------
  // UI STARTS
  // --------------------------------------------------------
  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Create Order</h2>

      {/* Medicines */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold">Medicines</h5>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Size</th>
                <th>Price (₹)</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                //console.log("item",item)

                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.dosage}</td>

                    <td>
                      <select
                        className="form-select"
                        value={item.size}
                        disabled={duration === "15" || duration === "30"}
                        onChange={(e) => changeSize(index, e.target.value)}
                      >
                        {MEDICINE_DATA[item.type].sizes.map((s) => 
                          <option key={s} value={s}>
                            {s}
                          </option>
                        )
                      
                      }
                      </select>
                    </td>

                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Duration */}
          <div className="mt-3">
            <label className="fw-semibold">Duration</label>
            <div>
  {DURATION_OPTIONS.map((opt) => (
    <label key={opt.value} className="me-3">
      <input
        type="radio"
        className="form-check-input me-1"
        value={opt.value}
        checked={duration === opt.value}
        onChange={() => setDuration(opt.value)}
      />
      {opt.label}
    </label>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Billing Summary */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold">Billing Summary</h5>
          <div className="d-flex justify-content-between mt-2">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>
          {!selfPickup && (
            <div className="d-flex justify-content-between">
              <span>Delivery Charge</span>
              <span>₹ {DELIVERY_CHARGE}</span>
            </div>
          )}
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>₹ {finalTotal}</span>
          </div>
        </div>
      </div>

      {/* Delivery / Address */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold">Delivery Option</h5>

          <label>
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={selfPickup}
              onChange={() => setSelfPickup(!selfPickup)}
            />
            Self Pickup
          </label>
          <br/>

          {selfPickup ? (
            <div className="mt-3 p-3 bg-light rounded">
              <p className="m-0">
                Divine Homoeo Care, Wazirabad, Sector 52, Gurgaon  
              </p>
              <p className="m-0">Timing: 10 AM – 9 PM</p>
              <p className="m-0">Contact: 8595040055</p>
            </div>
          ) : (
            <>
              <label className="mt-3 fw-semibold">Select Address</label>
              <select
                className="form-select"
                value={selectedAddressId}
                onChange={(e) => setSelectedAddressId(e.target.value)}
              >
                <option value="">Select</option>
                {addresses.map((addr) => (
                  <option key={addr._id} value={addr._id}>
                    {addr.name} - {addr.street}, {addr.city} ({addr.postalCode})
                  </option>
                ))}
              </select>

              <div className="my-3 text-center fw-bold">OR</div>

              {/* New Address */}
              <h6 className="fw-semibold">Add New Address</h6>
              <div className="row">
                {Object.keys(newAddress).map((field) => (
                  <div className="col-md-6 mt-2" key={field}>
                    <input
                      className="form-control"
                      placeholder={field}
                      value={newAddress[field]}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          [field]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              <button
                className="btn btn-primary mt-3"
                onClick={handleAddNewAddress}
              >
                Save Address
              </button>
            </>
          )}
        </div>
      </div>

      {/* Payment Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold">Payment Method</h5>

          <select
            className="form-select mb-3"
            disabled={!isAuthenticatedAdmin}
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>

          {/* QR + UTR */}
          <p className="mb-1">Scan QR</p>
          <div className="text-center">
            <img
              src={qrCodeImage}
              style={{ width: 160, borderRadius: 10 }}
              alt="QR"
            />
          </div>

          <div className="bg-light p-2 rounded mt-3">
            <b>UPI ID:</b> {upiId}
            <button
              className="btn btn-sm btn-outline-primary ms-3"
              onClick={() => navigator.clipboard.writeText(upiId)}
            >
              Copy
            </button>
          </div>

          <label className="fw-semibold mt-3">Enter UTR Number</label>
          <input
            className="form-control"
            value={utrNo}
            onChange={(e) => setUtrNo(e.target.value)}
          />
        </div>
      </div>

      <div className="text-end">
        <button className="btn btn-success px-4" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CreateOrderFromPrescription;

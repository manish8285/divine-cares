import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createAddressApi, createOrderByAdminApi, createOrderByUserApi, getMyAddressApi } from "../../../api";
import qrCodeImage from "../../../assets/img/QR.jpeg"

const CreateOrderFromPrescription = ({ onSubmit }) => {
  const { state } = useLocation();
  const prescription = state?.prescription;
  const { isAuthenticatedAdmin,isAuthenticated,user } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  if (!prescription) return <p>No Prescription Data Found</p>;

  const { patient, medicines } = prescription;

  // Delivery settings
  const DELIVERY_CHARGE_FIXED = 70;

  // Local States
  const [billing, setBilling] = useState("");
  const [shipping, setShipping] = useState("");
  const [selfPickup, setSelfPickup] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("divinehc@ybl");  
const [utrNo, setUtrNo] = useState("");


const [addresses, setAddresses] = useState([]);
const [selectedAddressId, setSelectedAddressId] = useState("");
const [newAddress, setNewAddress] = useState({
  name: "",
  phone: "",
  street: "",
  city: "",
  state:"",
  country:"India",
  pincode: ""
});

const handleAddNewAddress = async() => {
  try{
  if (!newAddress.city || !newAddress.phone || !state || !newAddress.postalCode || !newAddress.street) {
    alert("Please fill all required fields");
    return;
  }

  let addressPayload= {...newAddress}

  if(isAuthenticated){
    addressPayload['userId'] = user._id
  }


  const res = await createAddressApi(addressPayload);
  console.log(res.data)
  // If you want to save to backend, call API here
  setAddresses([...addresses,res.data]);
  setSelectedAddressId(res.data._id)
  setShipping(res.data._id);
  setBilling(res.data._id)

  setNewAddress({
    name: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
    state:""
  });

  alert("Address Added Successfully");
}catch(error){
  console.log(error)
}
};

const loadMyAddresses =async()=>{
    let filter = {}
    try{
      if(isAuthenticated){
        filter['userId'] = user._id
      }else{
        return
      }
    const res = await getMyAddressApi(filter)
    setAddresses(res.data || [])
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    console.log(state.prescription)
    loadMyAddresses()
  },[])



  const [duration, setDuration] = useState("15"); // 15 days or 30 days
  const [deliveryCharge, setDeliveryCharge] = useState(DELIVERY_CHARGE_FIXED);

  // Local medicine state (ml selection & subtotal)
  const [items, setItems] = useState(
    medicines.map((m) => ({
      id:m._id,
      name: m.name,
      dosage: m.dosage,
      type: m.medicineType || m.type || "other",
      quantity: 1,
      size: m.type === "complex" ? "15ml" : null,
      total: m.type === "complex" ? 200 : 400,
      price: m.type === "complex" ? 200 : 400, // example base pricess
    }))
  );

  const handleSizeChange = (index, value) => {
    const updated = [...items];
    updated[index].size = value;

    // Prices based on ml size (example: 15ml ₹150, 30ml ₹250)
    if (updated[index].type === "complex") {
      updated[index].price = value === "30ml" ? 400 : 200;
    }

    setItems(updated);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalTotal = subtotal + (selfPickup ? 0 : deliveryCharge);

  const handleSubmit = async() => {
    try{


    if(isAuthenticated && !utrNo){
      alert("payment UTR no required");
      return
    }

    if (!selectedAddressId && !selfPickup){
      alert("address is required");
      return;
    }


    let orderPayload = {
      admin:prescription.createdBy,
      user: prescription.userId,
      patient,
      items,
      duration,
      billingAddress: addresses.find((a) => a._id === selectedAddressId),
      shippingAddress: selfPickup ? null : addresses.find((a) => a._id === selectedAddressId),
      selfPickup,
      paymentMethod,
      transactionId:utrNo,
      deliveryCharge: selfPickup ? 0 : deliveryCharge,
      totalAmount: finalTotal,
    };

    //onSubmit(orderPayload);
    if(isAuthenticated){
    orderPayload['user']=user._id
    await createOrderByUserApi(orderPayload);
    navigate(`/user/orders/`)
    }
    if(isAuthenticatedAdmin){
    orderPayload['user'] = user._id
    const res =  await createOrderByAdminApi(orderPayload);
     navigate(`/order/${res.data.viewToken}`);
    }

  }catch(error){
    console.log(error)
  }
  };

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Create Order From Prescription</h2>

      {/* Medicines List */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold">Selected Medicines</h5>

          <div className="table-responsive mt-3">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Medicine</th>
                  <th>Dosage</th>
                  <th>Size</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="fw-semibold">{item.name}</td>
                    <td>{item.dosage}</td>

                    {/* Select only for complex type */}
                    <td className="text-center">
                      {item.type === "complex" ? (
                        <select
                          className="form-select"
                          value={item.size}
                          disabled={duration != "custom"} // disable for 15 days
                          onChange={(e) => handleSizeChange(index, e.target.value)}
                        >
                          <option value="15ml">15 ml</option>
                          <option value="30ml">30 ml</option>
                        </select>
                      ) : (
                        <span>{item.size || '-'}</span>
                      )}
                    </td>

                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Duration Selector */}
          <div className="mt-3">
            <label className="form-label fw-bold">Duration</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="duration"
                  value="15"
                  className="form-check-input"
                  checked={duration === "15"}
                  onChange={() => {
                    setDuration("15");

                    // Auto set complex to 15ml & disable dropdown
                    setItems((prev) =>
                      prev.map((i) =>
                        i.type === "complex"
                          ? { ...i, size: "15ml", price: 200 }
                          : i
                      )
                    );
                  }}
                />
                <label className="form-check-label">15 Days</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="duration"
                  value="30"
                  className="form-check-input"
                  checked={duration === "30"}
                  onChange={() => {
                    
                    setDuration("30")

                    // Auto set complex to 15ml & disable dropdown
                    setItems((prev) =>
                      prev.map((i) =>
                        i.type === "complex"
                          ? { ...i, size: "30ml", price: 400 }
                          : i
                      )
                    );
                  
                  
                  }
                  }
                />
                <label className="form-check-label">1 Month</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="duration"
                  value="custom"
                  className="form-check-input"
                  checked={duration === "custom"}
                  onChange={() => {
                    
                    setDuration("custom")

                    // Auto set complex to 15ml & disable dropdown
                    // setItems((prev) =>
                    //   prev.map((i) =>
                    //     i.type === "complex"
                    //       ? { ...i, size: "30ml", price: 400 }
                    //       : i
                    //   )
                    // );
                  
                  
                  }
                  }
                />
                <label className="form-check-label">Custom</label>
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Subtotal */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold">Billing Summary</h5>

          <div className="d-flex justify-content-between mt-3">
            <span className="fw-semibold">Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>

          {!selfPickup && (
            <div className="d-flex justify-content-between">
              <span className="fw-semibold">Delivery Charge</span>
              <span>₹ {deliveryCharge}</span>
            </div>
          )}

          <hr />

          <div className="d-flex justify-content-between fs-5 fw-bold">
            <span>Total</span>
            <span>₹ {finalTotal}</span>
          </div>
        </div>
      </div>

      {/* Delivery Type */}
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <h5 className="fw-semibold">Delivery Options</h5>

    {/* Self Pickup Checkbox */}
    <div className="form-check mt-2">
      <input
        type="checkbox"
        className="form-check-input"
        checked={selfPickup}
        onChange={() => setSelfPickup(!selfPickup)}
      />
      <label className="form-check-label">Self Pickup</label>
    </div>

    {/* Self Pickup Details */}
    {selfPickup && (
      <div className="mt-3 p-3 border rounded bg-light">
        <h6 className="fw-bold mb-2">Pickup Details</h6>

        <p className="mb-1">
          <strong>Clinic:</strong> Divine Homoeo Care
        </p>
        <p className="mb-1">
          <strong>Address:</strong> Wazirabad, Near Mata Chowk, Dhani Road, Sector 52, Gurgaon
        </p>
        <p className="mb-1">
          <strong>Pickup Time:</strong> 10:00 AM – 9:00 PM
        </p>
        <p className="mb-0">
          <strong>Contact:</strong> 8595040055
        </p>
      </div>
    )}
  </div>
</div>

{/* Address Section */}
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <h5 className="fw-semibold">Delivery Address</h5>

    {/* If self pickup selected, disable address section */}
    {selfPickup ? (
      <div className="alert alert-info mt-3">
        <strong>Self Pickup Selected.</strong>  
        Delivery address is not required.
      </div>
    ) : (
      <>
        {/* Select existing address */}
        <label className="fw-semibold mt-2">Choose Saved Address</label>
        <select
          className="form-select mt-2"
          value={selectedAddressId}
          onChange={(e) => setSelectedAddressId(e.target.value)}
        >
          <option value="">Select Address</option>
          {addresses?.map((addr) => (
            <option key={addr._id} value={addr._id}>
              {addr.name} - {addr.street} - {addr.city} - {addr.state} - {addr.phone} ({addr.postalCode})
            </option>
          ))}
        </select>

        <div className="text-center my-3 fw-semibold">OR</div>

        {/* Add New Address */}
        <h6 className="fw-semibold">Add New Address</h6>

        <div className="row mt-2">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={newAddress.name}
              onChange={(e) =>
                setNewAddress({ ...newAddress, name: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={newAddress.phone}
              onChange={(e) =>
                setNewAddress({ ...newAddress, phone: e.target.value })
              }
            />
          </div>

          <div className="col-md-12 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Street"
              value={newAddress.street}
              onChange={(e) =>
                setNewAddress({ ...newAddress, street: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              value={newAddress.city}
              onChange={(e) =>
                setNewAddress({ ...newAddress, city: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="state"
              value={newAddress.state}
              onChange={(e) =>
                setNewAddress({ ...newAddress, state: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              value={newAddress.postalCode}
              onChange={(e) =>
                setNewAddress({ ...newAddress, postalCode: e.target.value })
              }
            />
          </div>
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



      {/* Payment */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Payment Method</h5>

          <select
            className="form-select"
            value={paymentMethod}
            disabled={!isAuthenticatedAdmin}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>
        </div>
      </div>



    {/* Payment Section */}
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <h5 className="fw-semibold">Payment Details</h5>

    <p className="text-muted mt-2 mb-1">Scan QR Code to Pay</p>

    {/* QR Code Image */}
    <div className="d-flex justify-content-center my-3">
      <img
        src={qrCodeImage} // pass your QR code image URL in state or props
        alt="QR Code"
        style={{ width: "180px", height: "180px", borderRadius: "10px" }}
      />
    </div>

    {/* UPI ID */}
    <div className="bg-light p-3 rounded border">
      <strong>UPI ID:</strong>  
      <span className="ms-2">{upiId}</span>

      <button
        className="btn btn-sm btn-outline-primary ms-3"
        onClick={() => navigator.clipboard.writeText(upiId)}
      >
        Copy
      </button>
    </div>

    {/* Enter UTR Number */}
    <div className="mt-3">
      <label className="fw-semibold">Enter UTR / Transaction ID</label>
      <input
        type="text"
        className="form-control mt-1"
        placeholder="Enter 12-digit UTR number"
        value={utrNo}
        onChange={(e) => setUtrNo(e.target.value)}
      />
    </div>

    {/* Note */}
    <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
      Please ensure you enter the correct transaction ID for payment verification.
    </p>
  </div>
</div>
  

      {/* Submit */}
      <div className="text-end">
        <button className="btn btn-success px-4" onClick={handleSubmit}>
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default CreateOrderFromPrescription;

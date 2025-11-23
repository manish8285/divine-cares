import React from "react";
import { NavLink } from "react-router-dom";

const OrderDetails = ({ order }) => {
  if (!order) return <p>No order found</p>;

  const {
    orderId,
    status,
    paymentCompleted,
    paymentMethod,
    discount,
    deliveryCharge,
    subtotal,
    grandTotal,
    items,
    billingAddress,
    shippingAddress,
    createdAt,
    viewToken
  } = order;

  return (
    <div className="container my-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Order Details</h3>

        {/* {viewToken && (
          <NavLink
            to={`/orders/view/${viewToken}`}
            className="btn btn-primary btn-sm"
          >
            🔗 View Public Page
          </NavLink>
        )} */}
      </div>

      {/* Order Meta Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Order Information</h5>

          <div className="row g-3">
            <div className="col-md-4">
              <p className="mb-1 text-muted small">Order ID</p>
              <p className="fw-semibold">{orderId}</p>
            </div>

            <div className="col-md-4">
              <p className="mb-1 text-muted small">Status</p>
              <span className="badge bg-info text-dark">{status}</span>
            </div>

            <div className="col-md-4">
              <p className="mb-1 text-muted small">Created At</p>
              <p className="fw-semibold">{new Date(createdAt).toLocaleString()}</p>
            </div>

            <div className="col-md-4">
              <p className="mb-1 text-muted small">Payment Completed</p>
              <p className="fw-semibold">
                {paymentCompleted ? "Yes" : "No"}
              </p>
            </div>

            <div className="col-md-4">
              <p className="mb-1 text-muted small">Payment Method</p>
              <p className="fw-semibold">{paymentMethod || "Not Selected"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Items</h5>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Medicine</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price}</td>
                    <td className="fw-bold">₹{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Address row */}
      <div className="row g-3">
        {/* Billing */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Billing Address</h5>

              <p className="mb-1"><strong>{billingAddress?.street}</strong></p>
              <p className="mb-0">
                {billingAddress?.city}, {billingAddress?.state} - {billingAddress?.postalCode}
              </p>
              <p className="mb-0">{billingAddress?.country}</p>
              <p className="fw-semibold mt-1">📞 {billingAddress?.phone}</p>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Shipping Address</h5>

              <p className="mb-1"><strong>{shippingAddress?.street}</strong></p>
              <p className="mb-0">
                {shippingAddress?.city}, {shippingAddress?.state} - {shippingAddress?.postalCode}
              </p>
              <p className="mb-0">{shippingAddress?.country}</p>
              <p className="fw-semibold mt-1">📞 {shippingAddress?.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="card shadow-sm mt-4 mb-5">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Price Summary</h5>

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Discount</span>
              <span>- ₹{discount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Delivery Charge</span>
              <span>₹{deliveryCharge}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default OrderDetails;

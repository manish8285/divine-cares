import  { useEffect, useState } from "react";
import { getUserOrdersApi } from "../../../api";
import { NavLink } from "react-router-dom";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      const res = await getUserOrdersApi();
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">My Orders</h2>

      {loading ? (
        <p className="text-center text-muted">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-muted">No orders found.</p>
      ) : (
        <div className="table-responsive shadow rounded-3 border">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Medicine</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Discount</th>
                <th>Grand Total</th>
                <th>Status</th>
                <th>View</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="text-break">{order.orderId}</td>

                  <td className="text-break">
                    {order.items.map((item) => (
                      <div key={item._id}>
                        {item.name} ({item.size})
                      </div>
                    ))}
                  </td>

                  <td>
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </td>

                  <td>₹{order.subtotal}</td>
                  <td>{order.discount}%</td>
                  <td className="fw-bold text-success">₹{order.grandTotal}</td>

                  <td>
                    <span
                      className={`badge ${
                        order.status === "created"
                          ? "bg-primary"
                          : order.status === "delivered"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    {order.viewToken ? (
                      <NavLink
                        to={`/order/${order.viewToken}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </NavLink>
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>

                  <td className="text-break">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrders;

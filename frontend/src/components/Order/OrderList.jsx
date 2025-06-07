import React, { useEffect, useState } from "react";
import { getAllOrders, deleteOrder } from "../../services/orderApi";
import { Link } from "react-router-dom";
import "../Customer/CustomerStyles.css";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getAllOrders();
            setOrders(res.data);
        } catch (err) {
            console.error("Failed to fetch orders:", err);
            setOrders([]); // clear on error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Delete this order?")) {
            try {
                await deleteOrder(id);
                fetchData();
            } catch (err) {
                console.error("Failed to delete order:", err);
            }
        }
    };

    return (
        <div className="movie-card">
            <h3>Order List</h3>
            <div className="customer-list-container">
                {Array.isArray(orders) && orders.length > 0 ? (
                    <table className="customer-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Customer</th>
                            <th>Supplier</th>
                            <th>Vessel</th>
                            <th>Aeroplane</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((o) => (
                            <tr key={o.order_id} className="customer-row">
                                <td className="customer-id">#{o.order_id}</td>
                                <td>{o.order_date?.split("T")[0]}</td>
                                <td>{o.delivery_status}</td>
                                <td>₹{o.total_amount}</td>
                                <td>{o.customer_id}</td>
                                <td>{o.supplier_id}</td>
                                <td>{o.vessel_id || "-"}</td>
                                <td>{o.aeroplane_id || "-"}</td>
                                <td className="customer-actions">
                                    <Link
                                        to={`update-order/${o.order_id}`}
                                        className="header-link action-btn edit-btn"
                                    >
                                        ✏️ Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(o.order_id)}
                                        className="header-link action-btn delete-btn"
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-customers">No orders found</p>
                )}
            </div>
        </div>
    );
};

export default OrderList;

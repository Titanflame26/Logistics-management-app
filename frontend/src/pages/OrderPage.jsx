// pages/OrderPage.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateOrderForm from '../components/Order/CreateOrderForm';
import UpdateOrderForm from '../components/Order/UpdateOrderForm';
import OrderList from '../components/Order/OrderList';
import "../index.css";

export default function OrderPage() {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {location.pathname !== "/orders/create" && (
                        <Link to="create" className="header-link">Add Order</Link>
                    )}
                    {location.pathname !== "/orders" && (
                        <Link to="/orders" className="header-link">Order List</Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<OrderList />} />
                    <Route path="create" element={
                        <div className="form-container">
                            <CreateOrderForm />
                        </div>
                    } />
                    <Route path="update-order/:id" element={<UpdateOrderForm />} />
                </Routes>
            </div>
        </>
    );
}

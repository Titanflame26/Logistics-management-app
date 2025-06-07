// pages/CustomerPage.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateCustomerForm from '../components/Customer/CreateCustomerForm';
import UpdateCustomerForm from '../components/Customer/UpdateCustomerForm';
import CustomerList from '../components/Customer/CustomerList';
import "../index.css";

export default function CustomerPage() {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {location.pathname !== "/customers/create" && (
                        <Link to="/customers/create" className="header-link">Add Customer</Link>
                    )}
                    {location.pathname !== "/customers" && (
                        <Link to="/customers" className="header-link">Customer List</Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<CustomerList />} />
                    <Route path="create" element={
                        <div className="form-container">
                            <CreateCustomerForm />
                        </div>
                    } />
                    <Route path="update/:id" element={<UpdateCustomerForm />} />
                </Routes>
            </div>
        </>
    );
}

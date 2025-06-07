import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateSupplierForm from '../components/Supplier/CreateSupplierForm.jsx';
import SupplierList from '../components/Supplier/SupplierList.jsx';
import UpdateSupplierForm from '../components/Supplier/UpdateSupplierForm.jsx';
import '../index.css';

const SupplierPage = () => {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {location.pathname !== "/suppliers/create" && (
                        <Link to="/suppliers/create" className="header-link">Add Supplier</Link>
                    )}
                    {location.pathname !== "/suppliers" && (
                        <Link to="/suppliers" className="header-link">Supplier List</Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<SupplierList />} />
                    <Route
                        path="create"
                        element={
                            <div className="form-container">
                                <CreateSupplierForm />
                            </div>
                        }
                    />
                    <Route path="update-supplier/:id" element={<UpdateSupplierForm />} />
                </Routes>
            </div>
        </>
    );
};

export default SupplierPage;

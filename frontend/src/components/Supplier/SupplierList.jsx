import React, { useEffect, useState } from 'react';
import { getAllSuppliers, deleteSupplier } from '../../services/supplierApi';
import { Link } from 'react-router-dom';
import '../Customer/CustomerStyles.css';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);

    const fetchData = async () => {
        const res = await getAllSuppliers();
        setSuppliers(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this supplier?')) {
            await deleteSupplier(id);
            fetchData();
        }
    };

    return (
        <div className="movie-card">
            <h3>Supplier List</h3>
            <div className="customer-list-container">
                {Array.isArray(suppliers) && suppliers.length > 0 ? (
                    <table className="customer-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {suppliers.map((s) => (
                            <tr key={s.supplier_id} className="customer-row">
                                <td>#{s.supplier_id}</td>
                                <td>{s.supplier_name}</td>
                                <td>{s.contact_number}</td>
                                <td>{s.Email}</td>
                                <td>{s.address}</td>
                                <td>
                                    <Link
                                        to={`update-supplier/${s.supplier_id}`}
                                        className="header-link action-btn edit-btn"
                                    >
                                        ✏️ Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(s.supplier_id)}
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
                    <p className="no-customers">No suppliers found</p>
                )}
            </div>
        </div>
    );
};

export default SupplierList;

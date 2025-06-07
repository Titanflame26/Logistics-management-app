import React, { useState } from 'react';
import { createSupplier } from '../../services/supplierApi'; // Create this service file
import "../../index.css";

const CreateSupplierForm = () => {
    const [formData, setFormData] = useState({
        supplier_name: '',
        contact_number: '',
        Email: '',
        company: '',
        address: '',
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createSupplier(formData);
            alert('Supplier created successfully!');
            setFormData({
                supplier_name: '',
                contact_number: '',
                Email: '',
                company: '',
                address: '',
            });
        } catch (err) {
            console.error(err);
            alert('Error creating supplier');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: "lavenderblush", fontWeight: "bold" }}>
                Create New Supplier
            </h3>
            <input
                name="supplier_name"
                placeholder="Supplier Name"
                onChange={handleChange}
                value={formData.supplier_name}
                required
            />
            <input
                name="contact_number"
                placeholder="Contact Number"
                onChange={handleChange}
                value={formData.contact_number}
                required
            />
            <input
                type="Email"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.Email}
                required
            />
            <input
                name="company"
                placeholder="Company Name"
                onChange={handleChange}
                value={formData.company}
                required
            />
            <textarea
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
                required
            />
            <button type="submit">Create Supplier</button>
        </form>
    );
};

export default CreateSupplierForm;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSupplierById, updateSupplier } from '../../services/supplierApi';
import "../../index.css";

const UpdateSupplierForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        supplier_name: '',
        contact_number: '',
        Email: '',
        address: '',
    });

    const fetchSupplier = async () => {
        try {
            const res = await getSupplierById(id);
            setFormData(res.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching supplier data');
        }
    };

    useEffect(() => {
        fetchSupplier();
    }, [id]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateSupplier(id, formData);
            alert('Supplier updated!');
            navigate('/suppliers');
        } catch (err) {
            console.error(err);
            alert('Error updating supplier');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: "lavenderblush", fontWeight: "bold" }}>Update Supplier</h3>
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
                name="Email"
                type="Email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.Email}
                required
            />
            <input
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
                required
            />
            <button type="submit">Update Supplier</button>
        </form>
    );
};

export default UpdateSupplierForm;

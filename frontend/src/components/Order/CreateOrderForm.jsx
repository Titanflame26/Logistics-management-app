import React, { useEffect, useState } from 'react';
import { createOrder } from "../../services/orderApi";
import { getAllCustomers } from "../../services/customerApi.jsx";
import { getAllSuppliers } from "../../services/supplierApi.jsx";
import { getAllVessels } from "../../services/vesselApi.jsx";
import { getAllAeroplanes } from "../../services/aeroplaneApi.jsx";

const CreateOrderForm = () => {
    const [formData, setFormData] = useState({
        order_date: '',
        delivery_status: '',
        total_amount: '',
        customer_id: '',
        supplier_id: '',
        vessel_id: '',
        aeroplane_id: ''
    });

    const [customers, setCustomers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [vessels, setVessels] = useState([]);
    const [aeroplanes, setAeroplanes] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const [cust, supp, vess, aero] = await Promise.all([
                    getAllCustomers(),
                    getAllSuppliers(),
                    getAllVessels(),
                    getAllAeroplanes()
                ]);

                setCustomers(Array.isArray(cust.data) ? cust.data : []);
                setSuppliers(Array.isArray(supp.data) ? supp.data : []);
                setVessels(Array.isArray(vess.data) ? vess.data : []);
                setAeroplanes(Array.isArray(aero.data) ? aero.data : []);
            } catch (err) {
                console.error('Failed to fetch related entities:', err);
            }
        };

        fetchEntities();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanData = {
            ...formData,
            vessel_id: formData.vessel_id || null,
            aeroplane_id: formData.aeroplane_id || null
        };

        try {
            await createOrder(cleanData);
            setMessage('✅ Order created successfully!');
            setFormData({
                order_date: '',
                delivery_status: '',
                total_amount: '',
                customer_id: '',
                supplier_id: '',
                vessel_id: '',
                aeroplane_id: ''
            });
        } catch (err) {
            console.error('Order creation failed:', err);
            setMessage('❌ Failed to create order.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: "lavenderblush", fontWeight: "bold" }}>Create New Order</h3>

            <input
                type="date"
                name="order_date"
                value={formData.order_date}
                onChange={handleChange}
                required
                className="date-input"
                placeholder="Select Order Date"
            />

            <input
                type="text"
                name="delivery_status"
                placeholder="Delivery Status"
                value={formData.delivery_status}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="total_amount"
                placeholder="Total Amount"
                value={formData.total_amount}
                onChange={handleChange}
                required
                step="0.01"
            />

            <select name="customer_id" value={formData.customer_id} onChange={handleChange} required>
                <option value="">Select Customer</option>
                {customers.map(c => (
                    <option key={c.customer_id} value={c.customer_id}>
                        {c.customer_id}
                    </option>
                ))}
            </select>

            <select name="supplier_id" value={formData.supplier_id} onChange={handleChange} required>
                <option value="">Select Supplier</option>
                {suppliers.map(s => (
                    <option key={s.supplier_id} value={s.supplier_id}>
                        {s.supplier_id}
                    </option>
                ))}
            </select>

            <select name="vessel_id" value={formData.vessel_id} onChange={handleChange}>
                <option value="">Select Vessel (optional)</option>
                {vessels.map(v => (
                    <option key={v.vessel_id} value={v.vessel_id}>
                        {v.vessel_id}
                    </option>
                ))}
            </select>

            <select name="aeroplane_id" value={formData.aeroplane_id} onChange={handleChange}>
                <option value="">Select Aeroplane (optional)</option>
                {aeroplanes.map(a => (
                    <option key={a.aeroplane_id} value={a.aeroplane_id}>
                        {a.model}
                    </option>
                ))}
            </select>

            <button type="submit" className="btn-submit">Create Order</button>

            {message && <p style={{ marginTop: "1rem", color: "#10b981" }}>{message}</p>}
        </form>
    );
};

export default CreateOrderForm;

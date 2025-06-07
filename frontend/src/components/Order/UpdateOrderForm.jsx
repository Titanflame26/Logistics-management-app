import React, { useEffect, useState } from 'react';
import { getOrderById, updateOrder } from '../../services/orderApi';
import { getAllCustomers } from '../../services/customerApi';
import { getAllSuppliers } from '../../services/supplierApi';
import { getAllVessels } from '../../services/vesselApi';
import { getAllAeroplanes } from '../../services/aeroplaneApi';
import { useParams, useNavigate } from 'react-router-dom';
import '../../index.css';

const UpdateOrderForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        order_date: '',
        delivery_status: '',
        total_amount: '',
        customer_id: '',
        supplier_id: '',
        vessel_id: '',
        aeroplane_id: '',
    });

    const [customers, setCustomers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [vessels, setVessels] = useState([]);
    const [aeroplanes, setAeroplanes] = useState([]);
    const [message, setMessage] = useState('');

    const fetchEntities = async () => {
        try {
            const [cust, supp, vess, aero] = await Promise.all([
                getAllCustomers(),
                getAllSuppliers(),
                getAllVessels(),
                getAllAeroplanes(),
            ]);

            setCustomers(Array.isArray(cust.data) ? cust.data : []);
            setSuppliers(Array.isArray(supp.data) ? supp.data : []);
            setVessels(Array.isArray(vess.data) ? vess.data : []);
            setAeroplanes(Array.isArray(aero.data) ? aero.data : []);
        } catch (err) {
            console.error('Failed to fetch related data:', err);
        }
    };

    const fetchOrder = async () => {
        try {
            const res = await getOrderById(id);
            const data = res.data;

            setFormData({
                order_date: data.order_date?.split('T')[0] || '',
                delivery_status: data.delivery_status || '',
                total_amount: data.total_amount || '',
                customer_id: data.customer_id || '',
                supplier_id: data.supplier_id || '',
                vessel_id: data.vessel_id || '',
                aeroplane_id: data.aeroplane_id || '',
            });
        } catch (err) {
            console.error('Failed to load order:', err);
            setMessage('Failed to load order data.');
        }
    };

    useEffect(() => {
        fetchEntities();
        fetchOrder();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateOrder(id, formData);
            setMessage('Order updated successfully!');
            navigate('/orders');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update order.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: "lavenderblush", fontWeight: "bold" }}>Update Order</h3>

            <input type="date" name="order_date" value={formData.order_date}
                   onChange={handleChange} required className="date-input" />

            <input type="text" name="delivery_status" placeholder="Delivery Status"
                   value={formData.delivery_status} onChange={handleChange} required />

            <input type="number" name="total_amount" placeholder="Total Amount"
                   value={formData.total_amount} onChange={handleChange} required />

            <select name="customer_id" value={formData.customer_id} onChange={handleChange} required>
                <option value="">Select Customer</option>
                {customers.map(c => (
                    <option key={c.customer_id} value={c.customer_id}>
                        {c.customer_name}
                    </option>
                ))}
            </select>

            <select name="supplier_id" value={formData.supplier_id} onChange={handleChange} required>
                <option value="">Select Supplier</option>
                {suppliers.map(s => (
                    <option key={s.supplier_id} value={s.supplier_id}>
                        {s.supplier_name}
                    </option>
                ))}
            </select>

            <select name="vessel_id" value={formData.vessel_id} onChange={handleChange}>
                <option value="">Select Vessel (optional)</option>
                {vessels.map(v => (
                    <option key={v.vessel_id} value={v.vessel_id}>
                        {v.vessel_name}
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

            <button type="submit">Update Order</button>

            {message && <p style={{ marginTop: "1rem", color: "#10b981" }}>{message}</p>}
        </form>
    );
};

export default UpdateOrderForm;

import React, { useEffect, useState } from 'react';
import { createEmployee } from '../../services/employeeApi';
import { getAllCustomers } from '../../services/customerApi';
import { getAllSuppliers } from '../../services/supplierApi';
import '../../index.css';

const CreateEmployeeForm = () => {
    const [formData, setFormData] = useState({
        customer_id: '',
        employee_name: '',
        role: '',
        contact_number: '',
        salary: '',
        supplier_id: '',
    });

    const [customers, setCustomers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [message, setMessage] = useState('');

    const fetchCustomersAndSuppliers = async () => {
        try {
            const [custRes, suppRes] = await Promise.all([
                getAllCustomers(),
                getAllSuppliers(),
            ]);
            setCustomers(Array.isArray(custRes.data) ? custRes.data : []);
            setSuppliers(Array.isArray(suppRes.data) ? suppRes.data : []);
        } catch (err) {
            console.error('Failed to fetch customers or suppliers', err);
        }
    };

    useEffect(() => {
        fetchCustomersAndSuppliers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEmployee(formData);
            setMessage('Employee created successfully!');
            setFormData({
                customer_id: '',
                employee_name: '',
                role: '',
                contact_number: '',
                salary: '',
                supplier_id: '',
            });
        } catch (err) {
            console.error(err);
            setMessage('Failed to create employee.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: 'lavenderblush', fontWeight: 'bold' }}>
                Create New Employee
            </h3>

            <select
                name="customer_id"
                value={formData.customer_id}
                onChange={handleChange}
                required
            >
                <option value="">Select Customer</option>
                {customers.map((c) => (
                    <option key={c.customer_id} value={c.customer_id}>
                        {c.customer_id}
                    </option>
                ))}
            </select>

            <input
                name="employee_name"
                placeholder="Employee Name"
                onChange={handleChange}
                value={formData.employee_name}
                required
            />

            <input
                name="role"
                placeholder="Role"
                onChange={handleChange}
                value={formData.role}
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
                type="number"
                name="salary"
                placeholder="Salary"
                onChange={handleChange}
                value={formData.salary}
                required
            />

            <select
                name="supplier_id"
                value={formData.supplier_id}
                onChange={handleChange}
                required
            >
                <option value="">Select Supplier</option>
                {suppliers.map((s) => (
                    <option key={s.supplier_id} value={s.supplier_id}>
                        {s.supplier_id}
                    </option>
                ))}
            </select>

            <button type="submit">Create Employee</button>

            {message && (
                <p
                    style={{
                        marginTop: '1rem',
                        color: message.includes('successfully') ? '#10b981' : 'red',
                    }}
                >
                    {message}
                </p>
            )}
        </form>
    );
};

export default CreateEmployeeForm;

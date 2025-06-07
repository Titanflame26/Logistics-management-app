import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../../services/employeeApi';
import "../../index.css";

const UpdateEmployeeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employee_name: '',
        role: '',
        contact_number: '',
        salary: '',
        customer_id: '',
        supplier_id: '',
    });

    const fetchEmployee = async () => {
        try {
            const res = await getEmployeeById(id);
            setFormData(res.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching employee data');
        }
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateEmployee(id, formData);
            alert('Employee updated!');
            navigate('/employees');
        } catch (err) {
            console.error(err);
            alert('Error updating employee');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: "lavenderblush", fontWeight: "bold" }}>Update Employee</h3>
            <input name="employee_name" placeholder="Name" onChange={handleChange} value={formData.employee_name} required />
            <input name="role" placeholder="Role" onChange={handleChange} value={formData.role} required />
            <input name="contact_number" placeholder="Contact Number" onChange={handleChange} value={formData.contact_number} required />
            <input name="salary" placeholder="Salary" type="number" onChange={handleChange} value={formData.salary} required />
            <input name="customer_id" placeholder="Customer ID" onChange={handleChange} value={formData.customer_id} />
            <input name="supplier_id" placeholder="Supplier ID" onChange={handleChange} value={formData.supplier_id} />
            <button type="submit">Update Employee</button>
        </form>
    );
};

export default UpdateEmployeeForm;

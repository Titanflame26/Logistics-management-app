import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../../services/employeeApi';
import { Link } from 'react-router-dom';
import '../Customer/CustomerStyles.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const fetchData = async () => {
        const res = await getAllEmployees();
        setEmployees(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this employee?')) {
            await deleteEmployee(id);
            fetchData();
        }
    };

    return (
        <div className="movie-card">
            <h3>Employee List</h3>
            <div className="customer-list-container">
                {Array.isArray(employees) && employees.length > 0 ? (
                    <table className="customer-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Customer ID</th>
                            <th>Role</th>
                            <th>Contact</th>
                            <th>Salary</th>
                            <th>Supplier ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((e) => (
                            <tr key={e.employee_id} className="customer-row">
                                <td>#{e.employee_id}</td>
                                <td>{e.employee_name}</td>
                                <td>{e.customer_id}</td>
                                <td>{e.role}</td>
                                <td>{e.contact_number}</td>
                                <td>₹{e.salary}L</td>
                                <td>{e.supplier_id}</td>
                                <td>
                                    <Link
                                        to={`update-employee/${e.employee_id}`}
                                        className="header-link action-btn edit-btn"
                                    >
                                        ✏️ Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(e.employee_id)}
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
                    <p className="no-customers">No employees found</p>
                )}
            </div>
        </div>
    );
};

export default EmployeeList;

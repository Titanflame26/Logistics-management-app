import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../../services/customerApi';
import { Link } from 'react-router-dom';
import './CustomerStyles.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const res = await getAllCustomers();
    setCustomers(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this customer?")) {
      await deleteCustomer(id);
      fetchData();
    }
  };

  return (
    <div className="movie-card">
      <h3>Customer List</h3>
      <div className="customer-list-container">
        {Array.isArray(customers) && customers.length > 0 ? (
          <table className="customer-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.customer_id} className="customer-row">
                  <td className="customer-id">#{c.customer_id}</td>
                  <td className="customer-name">{c.customer_name}</td>
                  <td className="customer-contact">{c.contact_number}</td>
                  <td className="customer-email">{c.Email}</td>
                  <td className="customer-address">{c.address}</td>
                  <td className="customer-actions">
                    <Link to={`/update/${c.customer_id}`} className="header-link action-btn edit-btn">✏️ Edit</Link>
                    <button onClick={() => handleDelete(c.customer_id)} className="header-link action-btn delete-btn">🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-customers">No customers found</p>
        )}
      </div>
    </div>
  );
};

export default CustomerList;

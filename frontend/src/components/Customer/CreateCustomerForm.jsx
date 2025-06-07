import React, { useState } from 'react';
import { createCustomer } from '../../services/customerApi';
import "../../index.css";
const CreateCustomerForm = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    contact_number: '',
    Email: '',
    address: '',
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createCustomer(formData);
      alert('Customer created!');
      setFormData({ customer_name: '', contact_number: '', Email: '', address: '' });
    } catch (err) {
      console.error(err);
      alert('Error creating customer');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
        <h3 style={{ color: "Lavender", fontWeight: "bold" }}>Create New Customer</h3>
        <input name="customer_name" placeholder="Name" onChange={handleChange} value={formData.customer_name} required />
      <input name="contact_number" placeholder="Contact" onChange={handleChange} value={formData.contact_number} required />
      <input type="email" name="Email" placeholder="Email" onChange={handleChange} value={formData.Email} required />
      <textarea name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomerForm;

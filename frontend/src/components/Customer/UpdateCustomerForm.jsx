import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../../services/customerApi';

const UpdateCustomerForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ customer_name: '', contact_number: '', Email: '', address: '' });

  useEffect(() => {
    getCustomerById(id).then(res => setFormData(res.data)).catch(console.error);
  }, [id]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateCustomer(id, formData);
      alert('Updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>Update Customer</h3>
      <input name="customer_name" placeholder="Name" onChange={handleChange} value={formData.customer_name} required />
      <input name="contact_number" placeholder="Contact" onChange={handleChange} value={formData.contact_number} required />
      <input name="Email" placeholder="Email" onChange={handleChange} value={formData.Email} type="email" required />
      <textarea name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default UpdateCustomerForm;

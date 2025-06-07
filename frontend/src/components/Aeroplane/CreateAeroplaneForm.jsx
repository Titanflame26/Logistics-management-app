import React, { useState } from 'react';
import { createAeroplane } from '../../services/aeroplaneApi';
import '../../index.css';

const CreateAeroplaneForm = () => {
    const [formData, setFormData] = useState({
        model: '',
        capacity: '',
        current_location: '',
        status: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAeroplane(formData);
            setMessage('Aeroplane created successfully!');
            setFormData({
                model: '',
                capacity: '',
                current_location: '',
                status: ''
            });
        } catch (err) {
            console.error(err);
            setMessage('Failed to create aeroplane.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: 'lavenderblush', fontWeight: 'bold' }}>Create New Aeroplane</h3>

            <input
                name="model"
                placeholder="Model"
                value={formData.model}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                min="1"
                required
            />

            <input
                name="current_location"
                placeholder="Current Location"
                value={formData.current_location}
                onChange={handleChange}
            />

            <input
                name="status"
                placeholder="Status"
                value={formData.status}
                onChange={handleChange}
            />

            <button type="submit">Create Aeroplane</button>

            {message && <p style={{ marginTop: '1rem', color: '#10b981' }}>{message}</p>}
        </form>
    );
};

export default CreateAeroplaneForm;

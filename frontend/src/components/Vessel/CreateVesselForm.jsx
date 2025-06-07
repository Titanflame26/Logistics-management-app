import React, { useState } from 'react';
import { createVessel } from '../../services/vesselApi';
import '../../index.css';

const CreateVesselForm = () => {
    const [formData, setFormData] = useState({
        vessel_name: '',
        capacity: '',
        current_location: '',
        status: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createVessel(formData);
            setMessage('Vessel created successfully!');
            setFormData({
                vessel_name: '',
                capacity: '',
                current_location: '',
                status: ''
            });
        } catch (err) {
            console.error('Error creating vessel:', err);
            setMessage('Failed to create vessel.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: 'lavenderblush', fontWeight: 'bold' }}>Create New Vessel</h3>

            <input
                type="text"
                name="vessel_name"
                placeholder="Vessel Name"
                value={formData.vessel_name}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="current_location"
                placeholder="Current Location"
                value={formData.current_location}
                onChange={handleChange}
            />

            <input
                type="text"
                name="status"
                placeholder="Status"
                value={formData.status}
                onChange={handleChange}
            />

            <button type="submit">Create Vessel</button>

            {message && <p style={{ marginTop: '1rem', color: '#10b981' }}>{message}</p>}
        </form>
    );
};

export default CreateVesselForm;

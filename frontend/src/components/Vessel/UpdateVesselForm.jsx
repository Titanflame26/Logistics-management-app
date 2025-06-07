import React, { useState, useEffect } from 'react';
import { getVesselById, updateVessel } from '../../services/vesselApi';
import { useParams, useNavigate } from 'react-router-dom';
import '../../index.css';

const UpdateVesselForm = () => {
    const { id } = useParams(); // vessel_id from route params
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        vessel_name: '',
        capacity: '',
        current_location: '',
        status: '',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchVessel = async () => {
            try {
                const res = await getVesselById(id);
                if (res.data) {
                    setFormData({
                        vessel_name: res.data.vessel_name || '',
                        capacity: res.data.capacity ? String(res.data.capacity) : '',
                        current_location: res.data.current_location || '',
                        status: res.data.status || '',
                    });
                }
            } catch (err) {
                console.error('Failed to fetch vessel:', err);
                setMessage('Failed to load vessel data.');
            }
        };

        fetchVessel();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // convert capacity to number before sending to backend
            const updatedData = {
                ...formData,
                capacity: Number(formData.capacity),
            };

            await updateVessel(id, updatedData);
            setMessage('Vessel updated successfully!');
            navigate('/vessels');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update vessel.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: 'lavenderblush', fontWeight: 'bold' }}>
                Update Vessel
            </h3>

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
                min={1}
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

            <button type="submit">Update Vessel</button>

            {message && <p style={{ marginTop: '1rem', color: '#10b981' }}>{message}</p>}
        </form>
    );
};

export default UpdateVesselForm;

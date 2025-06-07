import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAeroplaneById, updateAeroplane } from '../../services/aeroplaneApi';
import '../../index.css';

const UpdateAeroplaneForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        model: '',
        capacity: '',
        current_location: '',
        status: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAeroplane = async () => {
            try {
                const response = await getAeroplaneById(id);
                const data = response.data;
                setFormData({
                    model: data.model || '',
                    capacity: data.capacity || '',
                    current_location: data.current_location || '',
                    status: data.status || ''
                });
            } catch (err) {
                console.error(err);
                setError('Failed to load aeroplane data.');
            }
        };

        fetchAeroplane();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateAeroplane(id, formData);
            setMessage('Aeroplane updated successfully!');
            setTimeout(() => navigate('/aeroplanes'), 1000);
        } catch (err) {
            console.error(err);
            setError('Failed to update aeroplane.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3 style={{ color: 'lavenderblush', fontWeight: 'bold' }}>Update Aeroplane</h3>

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

            <button type="submit">Update Aeroplane</button>

            {message && <p style={{ color: '#10b981' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default UpdateAeroplaneForm;

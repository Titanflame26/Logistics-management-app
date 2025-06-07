import React, { useEffect, useState } from 'react';
import { getAllVessels, deleteVessel } from '../../services/vesselApi';
import { Link } from 'react-router-dom';
import '../Customer/CustomerStyles.css';

const VesselList = () => {
    const [vessels, setVessels] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getAllVessels();
            setVessels(res.data);
        } catch (err) {
            console.error('Failed to fetch vessels:', err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this vessel?')) {
            await deleteVessel(id);
            fetchData();
        }
    };

    return (
        <div className="movie-card">
            <h3>Vessel List</h3>
            <div className="customer-list-container">
                {Array.isArray(vessels) && vessels.length > 0 ? (
                    <table className="customer-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vessel Name</th>
                            <th>Capacity</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vessels.map((v) => (
                            <tr key={v.vessel_id} className="customer-row">
                                <td>#{v.vessel_id}</td>
                                <td>{v.vessel_name}</td>
                                <td>{v.capacity}</td>
                                <td>{v.current_location}</td>
                                <td>{v.status}</td>
                                <td>
                                    <Link
                                        to={`update-vessel/${v.vessel_id}`}
                                        className="header-link action-btn edit-btn"
                                    >
                                        ✏️ Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(v.vessel_id)}
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
                    <p className="no-customers">No vessels found</p>
                )}
            </div>
        </div>
    );
};

export default VesselList;

import React, { useEffect, useState } from 'react';
import { getAllAeroplanes, deleteAeroplane } from '../../services/aeroplaneApi';
import { Link } from 'react-router-dom';
import '../Customer/CustomerStyles.css';

const AeroplaneList = () => {
    const [aeroplanes, setAeroplanes] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getAllAeroplanes();
            setAeroplanes(res.data);
        } catch (err) {
            console.error('Failed to fetch aeroplanes:', err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this aeroplane?')) {
            try {
                await deleteAeroplane(id);
                fetchData();
            } catch (err) {
                console.error('Failed to delete aeroplane:', err);
            }
        }
    };

    return (
        <div className="movie-card">
            <h3>Aeroplane List</h3>
            <div className="customer-list-container">
                {Array.isArray(aeroplanes) && aeroplanes.length > 0 ? (
                    <table className="customer-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Model</th>
                            <th>Capacity</th>
                            <th>Current Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {aeroplanes.map((aero) => (
                            <tr key={aero.aeroplane_id} className="customer-row">
                                <td>#{aero.aeroplane_id}</td>
                                <td>{aero.model}</td>
                                <td>{aero.capacity}</td>
                                <td>{aero.current_location}</td>
                                <td>{aero.status}</td>
                                <td>
                                    <Link
                                        to={`update-aeroplane/${aero.aeroplane_id}`}
                                        className="header-link action-btn edit-btn"
                                    >
                                        ✏️ Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(aero.aeroplane_id)}
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
                    <p className="no-customers">No aeroplanes found</p>
                )}
            </div>
        </div>
    );
};

export default AeroplaneList;

// pages/VesselPage.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateVesselForm from '../components/Vessel/CreateVesselForm';
import UpdateVesselForm from '../components/Vessel/UpdateVesselForm';
import VesselList from '../components/Vessel/VesselList';
import "../index.css";

export default function VesselPage() {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {location.pathname !== "/vessels/create" && (
                        <Link to="create" className="header-link">Add Vessel</Link>
                    )}
                    {location.pathname !== "/vessels" && (
                        <Link to="/vessels" className="header-link">Vessel List</Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<VesselList />} />
                    <Route path="create" element={
                        <div className="form-container">
                            <CreateVesselForm />
                        </div>
                    } />
                    <Route path="update-vessel/:id" element={<UpdateVesselForm />} />
                </Routes>
            </div>
        </>
    );
}

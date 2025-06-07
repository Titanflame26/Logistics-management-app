import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateAeroplaneForm from '../components/Aeroplane/CreateAeroplaneForm';
import UpdateAeroplaneForm from '../components/Aeroplane/UpdateAeroplaneForm';
import AeroplaneList from '../components/Aeroplane/AeroplaneList';
import '../index.css';

export default function AeroplanePage() {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {location.pathname !== '/aeroplanes/create' && (
                        <Link to="create" className="header-link">
                            Add Aeroplane
                        </Link>
                    )}
                    {location.pathname !== '/aeroplanes' && (
                        <Link to="/aeroplanes" className="header-link">
                            Aeroplane List
                        </Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<AeroplaneList />} />
                    <Route
                        path="create"
                        element={
                            <div className="form-container">
                                <CreateAeroplaneForm />
                            </div>
                        }
                    />
                    <Route path="update-aeroplane/:id" element={<UpdateAeroplaneForm />} />
                </Routes>
            </div>
        </>
    );
}

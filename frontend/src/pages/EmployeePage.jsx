// pages/EmployeePage.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateEmployeeForm from '../components/Employee/CreateEmployeeForm';
import UpdateEmployeeForm from '../components/Employee/UpdateEmployeeForm';
import EmployeeList from '../components/Employee/EmployeeList';
import "../index.css";

export default function EmployeePage() {
    const location = useLocation();

    return (
        <>
            <div className="navigation">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {location.pathname !== "/employees/create" && (
                        <Link to="create" className="header-link">Add Employee</Link>
                    )}
                    {location.pathname !== "/employees" && (
                        <Link to="/employees" className="header-link">Employee List</Link>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="create" element={
                        <div className="form-container">
                            <CreateEmployeeForm />
                        </div>
                    } />
                    <Route path="update-employee/:id" element={<UpdateEmployeeForm />} />
                </Routes>
            </div>
        </>
    );
}

// pages/HomePage.jsx
import { Link } from "react-router-dom";
import "../index.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <h4
                style={{
                    marginBottom: "20px",
                    fontWeight: "bold",           // use fontWeight for bold text
                    fontSize: "1.5rem",           // bigger font size for visibility
                    color: "darkblue",             // dark blue-ish color for good contrast// light background for readability
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "all 1s ease-in-out",
                }}
            >
                Welcome to Logistics Management System
            </h4>
            <div className="button-grid">
                <Link to="/customers" className="home-button">🧑‍🤝‍🧑 Customers</Link>
                <Link to="/orders" className="home-button">📦 Orders</Link>
                <Link to="/employees" className="home-button">👨‍💼 Employees</Link>
                <Link to="/vessels" className="home-button">🚢 Vessels</Link>
                <Link to="/aeroplanes" className="home-button">✈️ Aeroplanes</Link>
                <Link to="/suppliers" className="home-button">🏭 Suppliers</Link>
            </div>
        </div>
    );
};

export default HomePage;

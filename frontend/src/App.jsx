import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';
import EmployeePage from './pages/EmployeePage';
import OrderPage from './pages/OrderPage.jsx';
import HomePage from './pages/HomePage';
import SupplierPage from "./pages/SupplierPage.jsx";
import AeroplanePage from "./pages/AeroplanePage";
import VesselPage from "./pages/VesselPage.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers/*" element={<CustomerPage />} />
          <Route path="/orders/*" element={<OrderPage />} />
          <Route path="/employees/*" element={<EmployeePage />} />
          <Route path="/suppliers/*" element={<SupplierPage />} />
            <Route path="/aeroplanes/*" element={<AeroplanePage />} />
            <Route path="/vessels/*" element={<VesselPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

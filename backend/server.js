import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import CustomerRouter from './routes/customerRoutes.js';
import cors from 'cors';
import OrderRouter from "./routes/orderRoutes.js";
import EmployeeRouter from "./routes/employeeRoutes.js";
import SupplierRouter from "./routes/supplierRoutes.js";
import vesselRouter from "./routes/vesselRoutes.js";
import aeroplaneRouter from "./routes/aeroplaneRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const { sequelize } = db;
const PORT = process.env.PORT || 3000;

app.use('/api/customers', CustomerRouter);
app.use('/api/orders', OrderRouter);
app.use('/api/employees', EmployeeRouter);
app.use('/api/suppliers', SupplierRouter);
app.use('/api/vessels',vesselRouter);
app.use('/api/aeroplanes',aeroplaneRouter);

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected...');
    return sequelize.sync(); // Optional: sync models
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('❌ Unable to connect to DB:', err));
//sequelize.sync({ alter: true }); // or { force: true } for dev only

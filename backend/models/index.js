// models/index.js
import sequelize from '../db.js';
//import { Sequelize } from 'sequelize';

// Import models
import Customer from './customer.js'; // Add more models as needed
import Aeroplane from './aeroplanes.js';
import Order from './orders.js';
import Vessel from './vessels.js';
import Supplier from './suppliers.js';
import Employee from './employees.js';



const db = {};

//db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register models
db.Customer = Customer;
db.Employee= Employee;
db.Aeroplane= Aeroplane;
db.Order= Order;
db.Supplier= Supplier;
db.Vessel=Vessel;


export default db;

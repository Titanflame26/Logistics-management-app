import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Customer = sequelize.define('Customers', {
  customer_id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  allowNull: false,
  autoIncrement: true
},
  customer_name: DataTypes.STRING,
  contact_number: DataTypes.STRING,
  Email: {
    type: DataTypes.STRING,
    unique: true,
  },
  address: DataTypes.TEXT,
}, {
  tableName: 'Customer',
  timestamps: false,
});

export default Customer;

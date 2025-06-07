import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Employee = sequelize.define('Employees', {
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Customer',
      key: 'customer_id',
    },
  },
  employee_name: DataTypes.STRING,
  role: DataTypes.STRING,
  contact_number: DataTypes.STRING,
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Supplier',
      key: 'supplier_id',
    },
  },
}, {
  tableName: 'Employee',
  timestamps: false,
});

export default Employee;

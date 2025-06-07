import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Supplier = sequelize.define('Suppliers', {
  supplier_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  supplier_name: DataTypes.STRING,
  contact_number: DataTypes.STRING,
  Email: {
    type: DataTypes.STRING,
    unique: true
  },
  address: DataTypes.TEXT
}, {
  tableName: 'Supplier',
  timestamps: false
});

export default Supplier;

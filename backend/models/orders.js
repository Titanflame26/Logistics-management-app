// order.js
import sequelize from '../db.js'; // your Sequelize instance
import { DataTypes } from 'sequelize';

const Order = sequelize.define('Orders', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  delivery_status: DataTypes.STRING,
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Customer',
      key: 'customer_id'
    }
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Supplier',
      key: 'supplier_id'
    }
  },
  vessel_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Vessel',
      key: 'vessel_id'
    }
  },
  aeroplane_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Aeroplane',
      key: 'aeroplane_id'
    }
  }
}, {
  tableName: 'Order',
  timestamps: false // disables createdAt and updatedAt fields
});

export default Order;

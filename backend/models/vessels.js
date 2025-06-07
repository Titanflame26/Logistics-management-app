import { DataTypes } from 'sequelize';
import sequelize from '../db.js';  // Adjust the path as needed

const Vessel = sequelize.define("Vessels", {
  vessel_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  vessel_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
    },
  },
  current_location: {
    type: DataTypes.STRING(20),
  },
  status: {
    type: DataTypes.STRING(20),
  },
}, {
  tableName: "Vessel",
  timestamps: false,
});

export default Vessel;

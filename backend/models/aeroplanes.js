import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Aeroplane = sequelize.define("Aeroplanes", {
  aeroplane_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  model: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1
    }
  },
  current_location: {
    type: DataTypes.STRING(20)
  },
  status: {
    type: DataTypes.STRING(20)
  }
}, {
  tableName: "Aeroplane",
  timestamps: false
});

export default Aeroplane;

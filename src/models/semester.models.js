import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';

export const Semester = database.define('Semester', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  period: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING(100),
    allowNull: false,
  }
});


(async () => {
  try {
    await database.sync();
    console.log('Semester table has been created.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
})();

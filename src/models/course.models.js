import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';

export const Course = database.define('Courses',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1
        }
    },
    field: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
});
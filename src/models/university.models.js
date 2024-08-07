import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';

export const University = database.define('Universities',{
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
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    neighborhood: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
});
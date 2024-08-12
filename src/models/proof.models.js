import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';

export const Proof = database.define('Proofs',{

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    file: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
    
});

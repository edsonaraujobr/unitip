import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';
import { Semester } from './semester.models.js'; 

export const Matter = database.define('Matters', {
    code: {
        type: DataTypes.STRING(100),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idSemesters: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Semester,
            key: 'id',
        },
    }
});

Matter.belongsTo(Semester, { foreignKey: 'idSemesters' });
Semester.hasMany(Matter, { foreignKey: 'idSemesters' } )

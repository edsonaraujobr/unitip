import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';
import { Matter } from './matter.models.js';
import { Student } from './student.models.js';

export const Tip = database.define('Tips',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    tittle: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    tip: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    idMatters: {
        type: DataTypes.STRING(100),
        references: {
            model: Matter,
            key: "code",
        },
    },
    idStudents: {
        type: DataTypes.STRING(50),
        references: {
            model: Student,
            key: "registration",
        },
    }
});

Tip.belongsTo(Matter, { foreignKey: 'idMatters' });
Matter.hasMany(Tip, { foreignKey: 'idMatters' } )

Tip.belongsTo(Student, { foreignKey: 'idStudents' });
Student.hasMany(Tip, { foreignKey: 'idStudents' } )
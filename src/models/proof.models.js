import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';
import { Matter } from './matter.models.js';
import { Student } from './student.models.js';

export const Proof = database.define('Proofs',{

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    file: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    idMatters: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
            model: Matter,
            key: "code",
        },
    },
    idStudents: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
            model: Student,
            key: "registration",
        },
    }
    
});

Proof.belongsTo(Matter, { foreignKey: 'idMatters' });
Matter.hasMany(Proof, { foreignKey: 'idMatters' } )

Proof.belongsTo(Student, { foreignKey: 'registration' });
Student.hasMany(Proof, { foreignKey: 'registration' } )
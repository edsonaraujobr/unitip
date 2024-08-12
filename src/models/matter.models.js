// models/matter.models.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
import { Semester } from './semester.models.js'; // Modelo para Semesters
import { Tip } from './tip.models.js'; // Modelo para Tips
import { Proof } from './proof.models.js'; // Modelo para Proofs
import { Teach } from './teach.models.js'; // Modelo para Teaches

export const Matter = sequelize.define('Matter', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Teach,
            key: 'code', // Chave estrangeira na tabela Teaches
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idSemesters: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Semester,
            key: 'id',
        },
    },
    idMattersTips: {
        type: DataTypes.INTEGER,
        references: {
            model: Tip,
            key: 'id', // Chave estrangeira na tabela Tips
        },
    },
    idMattersProofs: {
        type: DataTypes.INTEGER,
        references: {
            model: Proof,
            key: 'id', // Chave estrangeira na tabela Proofs
        },
    }
}, {
    tableName: 'Matters',
    timestamps: false,
});

// Definindo os relacionamentos
Matter.belongsTo(Semester, { foreignKey: 'idSemesters' });
Matter.belongsTo(Tip, { foreignKey: 'idMattersTips' });
Matter.belongsTo(Proof, { foreignKey: 'idMattersProofs' });
Matter.belongsTo(Teach, { foreignKey: 'code' });

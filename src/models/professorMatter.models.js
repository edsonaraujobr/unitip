import { DataTypes } from "sequelize";
import { database } from "../database/connection.database.js";
import { Professor } from "./professor.models.js";
import { Matter } from "./matter.models.js";

export const ProfessorMatter = database.define('ProfessorMatters', {
    professorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Professor,
            key: 'id',
        },
    },
    matterId: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
            model: Matter,
            key: 'id',
        },
    },
});

Professor.belongsToMany(Matter, { through: ProfessorMatter, foreignKey: 'professorId' });
Matter.belongsToMany(Professor, { through: ProfessorMatter, foreignKey: 'matterId' });

import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';
import { Course } from './course.models.js';

export const Semester = database.define('Semesters', {
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
  },
  idCourses: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: Course,
        key: "id",
    },
  },
});


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
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    },
  },
  level: {
    type: DataTypes.STRING(100),
    allowNull: true,
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

Course.hasMany(Semester, { foreignKey: 'idCourses' });
Semester.belongsTo(Course, { foreignKey: 'idCourses' });


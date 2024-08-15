import { DataTypes } from 'sequelize';
import { database } from '../database/connection.database.js';
import { Course } from './course.models.js';

export const Student = database.define('Students', {
    registration: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    data_admission: {
        type: DataTypes.DATE,
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

Course.hasMany(Student, { foreignKey: 'idCourses' });
Student.belongsTo(Course, { foreignKey: 'idCourses' });
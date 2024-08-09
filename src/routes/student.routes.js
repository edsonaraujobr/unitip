import express from "express";
import { createStudent, getAllStudents, updateStudent, deleteStudent } from "../controllers/student.controllers.js";
const studentRouter = express.Router();

studentRouter("/student", createStudent)
studentRouter("/student", getAllStudents)
studentRouter("/student/:registration", updateStudent)
studentRouter("/student/:registration", deleteStudent)


export default studentRouter;
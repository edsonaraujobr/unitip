import express from "express";
import { createStudent, getAllStudents, updateStudent, deleteStudent } from "../controllers/student.controllers.js";
const studentRouter = express.Router();

studentRouter.post("/student", createStudent)
studentRouter.get("/student", getAllStudents)
studentRouter.put("/student/:registration", updateStudent)
studentRouter.delete("/student/:registration", deleteStudent)

export default studentRouter;
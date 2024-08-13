import express from "express";
import { createStudent, getAllStudents, updateStudent, deleteStudent } from "../controllers/student.controllers.js";
const studentRouter = express.Router();

studentRouter.post("/add/student", createStudent)
studentRouter.get("/students", getAllStudents)
studentRouter.put("/update/student/:registration", updateStudent)
studentRouter.delete("/delete/student/:registration", deleteStudent)

export default studentRouter;
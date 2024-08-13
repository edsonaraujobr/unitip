import express from "express";
import { createSemester, getAllSemesters, updateSemester, deleteSemester } from "../controllers/semester.controllers.js";
const semesterRouter = express.Router();

semesterRouter.post("/add/semester", createSemester);
semesterRouter.get("/semesters", getAllSemesters);
semesterRouter.put("/update/semester/:id", updateSemester);
semesterRouter.delete("/delete/semester/:id", deleteSemester);

export default semesterRouter;
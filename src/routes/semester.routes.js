import express from "express";
import { createSemester, getAllSemesters, updateSemester, deleteSemester } from "../controllers/semester.controllers.js";
const semesterRouter = express.Router();

semesterRouter.post("/semester", createSemester);
semesterRouter.get("/semester", getAllSemesters);
semesterRouter.put("/semester/:id", updateSemester);
semesterRouter.delete("/semester/:id", deleteSemester);

export default semesterRouter;
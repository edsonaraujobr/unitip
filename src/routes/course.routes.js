import express from "express";
import { createCourse, getAllCoursers } from "../controllers/course.controllers.js";

const courseRouter = express.Router();

courseRouter.post('/course', createCourse);
courseRouter.get('/course', getAllCoursers)













export default courseRouter;
import express from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../controllers/course.controllers.js";

const courseRouter = express.Router();

courseRouter.post('/course', createCourse);
courseRouter.get('/course', getAllCourses);
courseRouter.delete('/course/:id', deleteCourse);
courseRouter.put('/course/:id', updateCourse);

export default courseRouter;
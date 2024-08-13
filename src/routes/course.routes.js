import express from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../controllers/course.controllers.js";

const courseRouter = express.Router();

courseRouter.post('/add/course', createCourse);
courseRouter.get('/courses', getAllCourses);
courseRouter.delete('/delete/course/:id', deleteCourse);
courseRouter.put('/update/course/:id', updateCourse);

export default courseRouter;
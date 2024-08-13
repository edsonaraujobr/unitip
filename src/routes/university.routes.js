import express from "express";
import { createUniversity, deleteUniversity, getAllUniversities, updateUniversity } from "../controllers/university.controllers.js";

const universityRouter = express.Router();

universityRouter.post('/add/university', createUniversity);
universityRouter.get('/universities', getAllUniversities);
universityRouter.delete('/delete/university/:id', deleteUniversity);
universityRouter.put('/update/university/:id', updateUniversity);

export default universityRouter;
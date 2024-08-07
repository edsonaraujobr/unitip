import express from "express";
import { createUniversity, deleteUniversity, getAllUniversities, updateUniversity } from "../controllers/university.controllers.js";

const universityRouter = express.Router();

universityRouter.post('/university', createUniversity);
universityRouter.get('/university', getAllUniversities);
universityRouter.delete('/university/:id', deleteUniversity);
universityRouter.put('/university/:id', updateUniversity);

export default universityRouter;
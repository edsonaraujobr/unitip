import express from "express";
import { createProfessor, getAllProfessors, deleteProfessor, updateProfessor } from "../controllers/professor.controllers.js";

const courseRouter = express.Router();

courseRouter.post('/professor', createProfessor);
courseRouter.get('/professor', getAllProfessors);
courseRouter.delete('/professor/:id', deleteProfessor);
courseRouter.put('/professor/:id', updateProfessor);

export default professorRouter;
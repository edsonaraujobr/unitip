import express from "express";
import { createProfessor, getAllProfessors, deleteProfessor, updateProfessor } from "../controllers/professor.controllers.js";

const professorRouter = express.Router();

professorRouter.post('/add/professor', createProfessor);
professorRouter.get('/professors', getAllProfessors);
professorRouter.delete('/delete/professor/:id', deleteProfessor);
professorRouter.put('/update/professor/:id', updateProfessor);

export default professorRouter;
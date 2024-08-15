import express from 'express';
import { addProfessorToMatter, removeProfessorFromMatter, getMattersForProfessor, getProfessorsForMatter } from '../controllers/professorMatter.controllers.js';

const professorMatterRouter = express.Router();

professorMatterRouter.post('/add/professorMatter', addProfessorToMatter);
professorMatterRouter.delete('/remove/professorMatter', removeProfessorFromMatter);
professorMatterRouter.get('/professor/:professorId/matters', getMattersForProfessor);
professorMatterRouter.get('/matter/:matterId/professors', getProfessorsForMatter);

export default professorMatterRouter;

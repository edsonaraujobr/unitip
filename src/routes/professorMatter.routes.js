import express from 'express';
import { addProfessorToMatter, removeProfessorFromMatter, getAllProfessorsMatters,  getMattersForProfessor, getProfessorsForMatter } from '../controllers/professorMatter.controllers.js';

const professorMatterRouter = express.Router();

professorMatterRouter.post('/add/professorMatter', addProfessorToMatter);
professorMatterRouter.delete('/delete/professorMatter', removeProfessorFromMatter);
professorMatterRouter.get('/professor/:professorId/matters', getMattersForProfessor);
professorMatterRouter.get('/matter/:matterId/professors', getProfessorsForMatter);
professorMatterRouter.get('/professorMatters', getAllProfessorsMatters)

export default professorMatterRouter;

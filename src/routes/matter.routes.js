import express from 'express';
import { createMatter, getAllMatters, updateMatter, deleteMatter } from '../controllers/matter.controller.js';

const matterRouter = express.Router();

// Rota para criar uma nova matéria
matterRouter.post('/matters', createMatter);

// Rota para obter todas as matérias
matterRouter.get('/matters', getAllMatters);

// Rota para atualizar uma matéria existente
matterRouter.put('/matters/:code', updateMatter);

// Rota para deletar uma matéria
matterRouter.delete('/matters/:code', deleteMatter);

export default matterRouter;

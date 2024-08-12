import express from 'express';
import { createMatter, getAllMatters, updateMatter, deleteMatter } from '../controllers/matter.controller.js';

const matterRouter = express.Router();

matterRouter.post('/matters', createMatter);
matterRouter.get('/matters', getAllMatters);
matterRouter.put('/matters/:code', updateMatter);
matterRouter.delete('/matters/:code', deleteMatter);

export default matterRouter;

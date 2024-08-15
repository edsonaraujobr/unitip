import express from 'express';
import { createMatter, getAllMatters, updateMatter, deleteMatter } from '../controllers/matter.controllers.js';

const matterRouter = express.Router();

matterRouter.post('/add/matter', createMatter);
matterRouter.get('/matters', getAllMatters);
matterRouter.put('/update/matters/:code', updateMatter);
matterRouter.delete('/delete/matters/:code', deleteMatter);

export default matterRouter;

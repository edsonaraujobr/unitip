import express from 'express';
import { createMatter, getAllMatters, updateMatter, deleteMatter } from '../controllers/matter.controllers.js';

const matterRouter = express.Router();

matterRouter.post('/add/matters', createMatter);
matterRouter.get('/matters', getAllMatters);
matterRouter.put('/delete/matters/:code', updateMatter);
matterRouter.delete('/update/matters/:code', deleteMatter);

export default matterRouter;

import express from "express";
import {createTip, getAllTips, deleteTip, updateTip} from "../controllers/tip.controllers.js"
const tipRouter = express.Router();

tipRouter.post('/add/tip', createTip);
tipRouter.get('/tips', getAllTips);
tipRouter.delete('/delete/tip/:id', deleteTip);
tipRouter.put('/update/tip/:id', updateTip);

export default tipRouter;
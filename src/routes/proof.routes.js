import express from "express";
import { createProof, deleteProof, getAllProofs, updateProof } from "../controllers/proof.controllers.js";

const courseProof = express.Router();

courseProof.post('/proof', createProof);
courseProof.get('/proof', getAllProofs);
courseProof.delete('/proof/:id', deleteProof);
courseProof.put('/proof/:id', updateProof);

export default courseProof;

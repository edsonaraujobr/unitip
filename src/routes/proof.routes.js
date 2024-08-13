import express from "express";
import { createProof, deleteProof, getAllProofs, updateProof } from "../controllers/proof.controllers.js";

const courseProof = express.Router();

courseProof.post('/add/proof', createProof);
courseProof.get('/proofs', getAllProofs);
courseProof.delete('/delete/proof/:id', deleteProof);
courseProof.put('/update/proof/:id', updateProof);

export default courseProof;

import { Proof } from "../models/proof.models.js";

export const createProof = async (req, res) => {
    try {
        const { date, file, idMatters, idStudents } = req.body;

        if (!file || !idMatters || !idStudents )
            return res.status(400).json({ messageError: "Faltam parâmetros." });

        const proof = {
            date,
            file,
            idMatters,
            idStudents
        };

        await Proof.sync();
        await Proof.create(proof);
        return res.status(201).json({ messageSuccess: "Prova criada com sucesso." });
    } catch (error) {
        return res.status(500).json({ messageError: "Prova não criada." });
    }
};

export const getAllProofs = async (req, res) => {
    try {
        const proofs = await Proof.findAll();
        if (!proofs)
            return res.status(400).json({ messageError: "Nenhuma prova encontrada." });
        return res.status(200).json({ proofs });
    } catch (error) {
        return res.status(500).json({ messageError: "Não foi possível retornar as provas." });
    }
};

export const updateProof = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, file, idMatters, idStudents  } = req.body;

        const updateFields = {};
        if (date) updateFields.date = date;
        if (file) updateFields.file = file;
        if (idMatters) updateFields.idMatters = idMatters;
        if (idStudents) updateFields.idStudents = idStudents;

        if (Object.keys(updateFields).length === 0)
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

        const [updated] = await Proof.update(updateFields, {
            where: { id },
        });

        if (!updated)
            return res.status(404).json({ messageError: "Prova não encontrada." });

        return res.status(200).json({ messageSuccess: "Prova atualizada com sucesso." });
    } catch (error) {
        return res.status(500).json({ messageError: "Prova não atualizada." });
    }
};

export const deleteProof = async (req, res) => {
    try {
        const { id } = req.params;
        const proof = await Proof.findByPk(id);

        if (!proof)
            return res.status(404).json({ messageError: "Prova não encontrada." });

        await Proof.destroy({
            where: { id },
        });
        return res.status(200).json({ messageSuccess: 'Prova deletada com sucesso.' });
    } catch (error) {
        return res.status(500).json({ messageError: "Prova não deletada." });
    }
};

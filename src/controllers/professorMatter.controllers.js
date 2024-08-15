import { ProfessorMatter } from '../models/professorMatter.models.js';
import { Matter } from '../models/matter.models.js';
import { Professor } from '../models/professor.models.js';

export const addProfessorToMatter = async (req, res) => {
    try {
        const { professorId, matterId } = req.body;

        if (!professorId || !matterId)
            return res
              .status(400)
              .json({ messageError: "Faltam parâmetros obrigatórios." });

        await ProfessorMatter.sync();
        await ProfessorMatter.create({ professorId, matterId });

        return res.status(201).json({messageSuccess: "Relação criada com sucesso!"});
    } catch (error) {
        return res.status(500).json({ messageError: "Não foi possível criar a relação" , error});
    }
};

export const removeProfessorFromMatter = async (req, res) => {
    try {
        const { professorId, matterId } = req.body;

        const result = await ProfessorMatter.destroy({
            where: { professorId, matterId }
        });

        if (result) {
            return res.status(200).json({ messageSuccess: 'Relação removida com sucesso' });
        } else {
            return res.status(404).json({ messageError: 'Relação não encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ messageError: "Erro ao buscar relação", error });
    }
};

export const getMattersForProfessor = async (req, res) => {
    try {
        const { professorId } = req.params;

        const matters = await ProfessorMatter.findAll({
            where: { professorId },
        });

        return res.status(200).json(matters);
    } catch (error) {
        return res.status(500).json({ messageError: "Erro ao buscar relações", error });
    }
};

export const getProfessorsForMatter = async (req, res) => {
    try {
        const { matterId } = req.params;

        const professors = await ProfessorMatter.findAll({
            where: { matterId },
        });

        return res.status(200).json(professors);
    } catch (error) {
        return res.status(500).json({ messageError: "Erro ao buscar relações", error });
    }
};

export const getAllProfessorsMatters = async (req,res) => {
    try {
        const data = await ProfessorMatter.findAll();
        if(!data)
            return res.status(400).json({ messageError: "Nenhum relação encontrada." });
        return res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({messageError: "Não foi possível retornar as relações", error});
    }
}
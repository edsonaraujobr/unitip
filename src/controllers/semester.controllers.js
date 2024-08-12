import { Semester } from "../models/semester.models.js";

export const createSemester = async (req, res) => {
    try {
        const { id, period, level, idCourses } = req.body;


        if (!id  || !idCourses) {
            return res.status(400).json({ messageError: "Faltam parâmetros." });
        }

        const semester = {
            id,
            period,
            level,
            idCourses,
        };

        await Semester.sync();
        await Semester.create(semester);
        return res.status(201).json({ messageSuccess: "Semestre criado com sucesso." });
    } catch (error) {
        return res.status(500).json({ messageError: "Semestre não criado." });
    }
}

export const getAllSemesters = async (req, res) => {
    try {
        const semesters = await Semester.findAll();
        
        if (!semesters) {
            return res.status(400).json({ messageError: "Nenhum semestre encontrado." });
        }
        return res.status(200).json({ semesters });
    } catch (error) {
        return res.status(500).json({ messageError: "Não foi possível retornar os semestres." });
    }
}

export const updateSemester = async (req, res) => {
    try {
        const { id } = req.params;
        const { period, level, idCourses } = req.body;

        const updateFields = {};
        if (period) updateFields.period = period;
        if (level) updateFields.level = level;
        if (idCourses) updateFields.idCourses = idCourses;

        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });
        }

        const [updated] = await Semester.update(updateFields, {
            where: { id }
        });

        if (!updated) {
            return res.status(404).json({ messageError: "Semestre não encontrado." });
        }

        return res.status(200).json({ messageSuccess: "Semestre atualizado com sucesso." });

    } catch (error) {
        return res.status(500).json({ messageError: "Semestre não atualizado." });
    }
}

export const deleteSemester = async (req, res) => {
    try {
        const { id } = req.params;
        const semester = await Semester.findByPk(id);

        if (!semester) {
            return res.status(404).json({ messageError: "Semestre não encontrado." });
        }

        await Semester.destroy({
            where: { id }
        });

        return res.status(200).json({ messageSuccess: 'Semestre deletado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ messageError: "Semestre não deletado." });
    }
}

import { Matter } from "../models/matter.models.js";

export const createMatter = async (req, res) => {
    try {
        const { code, name, hours, level, idSemesters} = req.body;

        if (!code || !name || !hours || !idSemesters)
            return res.status(400).json({ messageError: "Falta parâmetro." });

        const matter = {
            code,
            name,
            hours,
            level,
            idSemesters
        };

        await Matter.sync();
        await Matter.create(matter);
        return res.status(201).json({ messageSuccess: "Matéria criada com sucesso." });
    } catch (error) {
        return res.status(500).json({ messageError: "Matéria não criada." , error});
    }
}

export const getAllMatters = async (req, res) => {
    try {
        const matters = await Matter.findAll();
        if (!matters)
            return res.status(400).json({ messageError: "Nenhuma matéria encontrada." });
        return res.status(200).json({ matters });
    } catch (error) {
        return res.status(500).json({ messageError: "Não foi possível retornar as matérias." , error});
    }
}

export const updateMatter = async (req, res) => {
    try {
        const { code } = req.params;
        const { name, hours, level, idSemesters } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (hours) updateFields.hours = hours;
        if (level) updateFields.level = level;
        if (idSemesters) updateFields.idSemesters = idSemesters;

        if (Object.keys(updateFields).length === 0)
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

        const [updated] = await Matter.update(updateFields, {
            where: { code },
        });

        if (!updated)
            return res.status(404).json({ messageError: "Matéria não encontrada." });

        return res.status(200).json({ messageSuccess: "Matéria atualizada com sucesso." });
    } catch (error) {
        return res.status(500).json({ messageError: "Matéria não atualizada.", error });
    }
}

export const deleteMatter = async (req, res) => {
    try {
        const { code } = req.params;
        const matter = await Matter.findByPk(code);

        if (!matter)
            return res.status(404).json({ messageError: "Matéria não encontrada." });

        await Matter.destroy({
            where: { code },
        });
        return res.status(200).json({ messageSuccess: 'Matéria deletada com sucesso.' });
    } catch (error) {
        return res.status(500).json({ messageError: "Matéria não deletada." , error});
    }
}

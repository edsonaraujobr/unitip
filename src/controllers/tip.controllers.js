import { Tip } from "../models/tip.models.js";

export const createTip = async (req, res) => {
    try {
        const { tittle, tip, idMatters, idStudents } = req.body;

        const tipObject = {};

        if(!tittle || !tip || !idMatters || !idStudents )
            return res.status(400).json({ messageError: "Faltam parâmetros." });

        tipObject.idMatters = idMatters;
        tipObject.idStudents = idStudents;
        tipObject.tittle = tittle;
        tipObject.tip = tip;

        await Tip.sync();
        await Tip.create(tipObject);
        return res.status(201).json({ messageSucess: "Dica criado com sucesso." });
    } catch (error) {
        return res.status(500).json({messageError: "Dica não criado.", error});
    }
}

export const getAllTips = async (req,res) => {
    try {
        const tips = await Tip.findAll();
        if(!tips)
            return res.status(400).json({ messageError: "Nenhuma dica encontrada." });
        return res.status(200).json({tips});
    } catch (error) {
        return res.status(500).json({messageError: "Não foi possível retornar as dicas",error});
    }
}

export const updateTip = async (req, res) => {
    try {
        const { id } = req.params;
        const {  tittle, tip, idMatters, idStudents  } = req.body;

        const updateFields = {};
        if (tittle) updateFields.tittle = tittle;
        if (tip) updateFields.date = date;
        if (idMatters) updateFields.idMatters = idMatters;
        if (idStudents) updateFields.idStudents = idStudents;

        if (Object.keys(updateFields).length === 0) 
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

        const [updated] = await Tip.update(updateFields, {
            where: { id },
        });

        if (!updated) 
            return res.status(404).json({ messageError: "Dica não encontrada." });

        return res.status(200).json({messageSucess: "Dica atualizada com sucesso"});
    } catch (error) {
        return res.status(500).json({messageError: "Dica não atualizada.",error});
    }
}

export const deleteTip = async (req,res) => {
    try {
        const { id } = req.params;
        const tip = await Tip.findByPk(id);

        if (!tip) 
            return res.status(404).json({ messageError: "Dica não encontrada." });

        await Tip.destroy({
            where: { id },
          });
        return res.status(200).json({messageSuccess: 'Dica deletada com sucesso'})
    } catch (error) {
        return res.status(500).json({messageError: "Dica não deletada.", error});
    }

}
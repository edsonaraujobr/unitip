import { Tip } from "../models/tip.models.js";

export const createTip = async (req, res) => {
    try {
        const { id, tittle, date, tip } = req.body;

        const tipObject = {};

        if(!id || tittle || tip )
            return res.status(400).json({ messageError: "Falta parâmetro." });

        tipObject.id = id;
        tipObject.tittle = tittle;
        tipObject.tip = tip;

        if(date) tipObject.date = date;

        await Tip.sync();
        await Tip.create(tipObject);
        return res.status(201).json({ messageSucess: "Dica criado com sucesso." });
    } catch (error) {
        return res.status(500).json({messageError: "Dica não criado."});
    }
}

export const getAllTips = async (req,res) => {
    try {
        const tips = await Tip.findAll();
        if(!tips)
            return res.status(400).json({ messageError: "Nenhuma dica encontrada." });
        return res.status(200).json({tips});
    } catch (error) {
        return res.status(500).json({messageError: "Não foi possível retornar as dicas"});
    }
}

export const updateTip = async (req, res) => {
    try {
        const { id } = req.params;
        const {  tittle, date, tip } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (duration) updateFields.duration = duration;
        if (field) updateFields.field = field;
        if (type) updateFields.type = type;

        if (Object.keys(updateFields).length === 0) 
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

        const [updated] = await Course.update(updateFields, {
            where: { id },
        });

        if (!updated) 
            return res.status(404).json({ messageError: "Curso não encontrado." });

        return res.status(200).json({messageSucess: "Curso atualizado com sucesso"});
    } catch (error) {
        return res.status(500).json({messageError: "Curso não atualizado."});
    }
}

export const deleteTip = async (req,res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);

        if (!course) 
            return res.status(404).json({ messageError: "Curso não encontrado." });

        await Course.destroy({
            where: { id },
          });
        return res.status(200).json({messageSuccess: 'Curso deletado com sucesso'})
    } catch (error) {
        return res.status(500).json({messageError: "Curso não deletado."});
    }

}
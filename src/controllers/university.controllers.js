import { University } from "../models/university.models.js";

export const createUniversity = async (req, res) => {
    try {
        const { name, email, city, state, street, neighborhood } = req.body;

        const university = {};

        if(!name || !city || !state)
            return res.status(400).json({ messageError: "Falta parâmetros obrigatórios." });

        university.name = name;
        university.city = city;
        university.state = state;

        if(email) university.email = email;
        if(street) university.street = street;
        if(neighborhood) university.neighborhood = neighborhood;

        await University.sync();
        await University.create(university);
        return res.status(201).json({ messageSucess: "Universidade criada com sucesso." });
    } catch (error) {
        return res.status(500).json({messageError: "Universidade não criada.", error});
    }
}

export const getAllUniversities = async (req,res) => {
    try {
        const universities = await University.findAll();
        if(!universities)
            return res.status(400).json({ messageError: "Nenhuma universidade encontrada." });
        return res.status(200).json({universities});
    } catch (error) {
        return res.status(500).json({messageError: "Não foi possível retornar as universidades", error});
    }
}

export const updateUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, city, state, street, neighborhood } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (city) updateFields.city = city;
        if (state) updateFields.state = state;
        if (street) updateFields.street = street;
        if (neighborhood) updateFields.neighborhood = neighborhood;

        if (Object.keys(updateFields).length === 0) 
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });
        
        const [updated] = await University.update(updateFields, {
            where: { id },
        });

        if (!updated) 
            return res.status(404).json({ messageError: "Universidade não encontrada." });

        return res.status(200).json({messageSucess: "Universidade atualizada com sucesso"});
    } catch (error) {
        return res.status(500).json({messageError: "Universidade não atualizada.", error});
    }
}

export const deleteUniversity = async (req,res) => {
    try {
        const { id } = req.params;
        const universidade = await University.findByPk(id);

        if (!universidade) 
            return res.status(404).json({ messageError: "Universidade não encontrada." });

        await University.destroy({
            where: { id },
          });
        return res.status(200).json({messageSuccess: 'Universidade deletada com sucesso'})
    } catch (error) {
        return res.status(500).json({messageError: "Universidade não deletada.", error});
    }

}
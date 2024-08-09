import { Course } from "../models/course.models.js";

export const createCourse = async (req, res) => {
    try {
        const { name, duration, field, type } = req.body;

        const course = {};

        if(!name)
            return res.status(400).json({ messageError: "Falta parâmetro." });

        course.name = name;
        if(duration) course.duration = duration;
        if(field) course.field = field;
        if(type) course.type = type;

        await Course.sync();
        await Course.create(course);
        return res.status(201).json({ messageSucess: "Curso criado com sucesso." });
    } catch (error) {
        return res.status(500).json({messageError: "Curso não criado."});
    }
}

export const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.findAll();
        if(!courses)
            return res.status(400).json({ messageError: "Nenhum curso encontrado." });
        return res.status(200).json({courses});
    } catch (error) {
        return res.status(500).json({messageError: "Não foi possível retornar os cursos"});
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, duration, field, type } = req.body;

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

export const deleteCourse = async (req,res) => {
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
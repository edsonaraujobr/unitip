import { Course } from "../models/course.models.js";

export const createCourse = async (req, res) => {
    try {
        const { name, duration, field } = req.body;
        await Course.sync();
        const newUser = await Course.create({name, duration, field});
        return res.status(201).json({ messageSucess: "curso criado" });
    } catch (error) {
        return res.status(400).json({messageError: "curso não criado"})
    }
}

export const getAllCoursers = async (req,res) => {
    try {
        const coursers = await Course.findAll();
        return res.json({coursers});
    } catch (error) {
        return res.status(400).json({messageError: "Não foi possível retornar os cursos"})
    }
}
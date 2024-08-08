import { Student } from "../models/student.models.js";

export const createStudent = async (req, res) => {
    try {
        const { registration, full_name, email, password, photo, date_admission, idCourses } = req.body;

        if (!registration || !full_name || !email || !password || !date_admission || !idCourses) {
            return res.status(400).json({ messageError: "Faltam parâmetros." });
        }

        const student = {
            registration,
            full_name,
            email,
            password,
            photo,
            date_admission,
            idCourses,
        };

        await Student.sync();
        await Student.create(student);
        return res.status(201).json({ messageSucess: "Estudante criado com sucesso." });
    } catch (error) {
        return res.status(500).json({messageError: "Estudante não criado."});
    }
}
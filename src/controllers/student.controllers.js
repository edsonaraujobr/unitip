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
        return res.status(500).json({ messageError: "Estudante não criado." });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        if (!students)
            return res.status(400).json({ messageError: "Nenhum estudante encontrado." });
        return res.status(200).json({ students });
    } catch (error) {
        return res.status(500).json({ messageError: "Não foi possível retornar os estudantes." });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const { registration } = req.params;
        const { full_name, email, password, photo, date_admission, idCourses } = req.body;

        const updateFields = {};
        if (full_name) updateFields.full_name = full_name
        if (email) updateFields.email = email
        if (password) updateFields.password = password
        if (photo) updateFields.photo = photo
        if (date_admission) updateFields.date_admission = date_admission
        if (idCourses) updateFields.idCourses = idCourses

        if (Object.keys(updateFields).length === 0)
            return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

        const [updated] = await Student.update(updateFields, {
            where: { registration }
        });

        if (!updated)
            return res.status(404).json({ messageError: "Estudante não encontrado." });

        return res.status(200).json({ messageSucess: "Estudante atualizado com sucesso" });

    } catch (error) {
        return res.status(500).json({ messageError: "Estudante não atualizado." });
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const { registration } = req.params
        const student = await Student.findByPk(registration);

        if (!student)
            return res.status(404).json({ messageError: "Estudante não encontrado." });

        await Student.destroy({
            where: { registration }

        });
        return res.status(200).json({ messageSuccess: 'Estudante deletado com sucesso' })
    } catch (error) {
        return res.status(500).json({ messageError: "Estudante não deletado." });
    }
}
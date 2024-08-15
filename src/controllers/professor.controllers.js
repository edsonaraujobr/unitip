import { Professor } from "../models/professor.models.js";

export const createProfessor = async (req, res) => {
  try {
    const { name, email, stars } = req.body;

    if (!name || !email)
      return res
        .status(400)
        .json({ messageError: "Faltam parâmetros obrigatórios." });

    const professor = { name, email };

    if (stars) professor.stars = stars;

    await Professor.sync();
    await Professor.create(professor);
    return res
      .status(201)
      .json({ messageSuccess: "Professor cadastrado com sucesso." });
  } catch (error) {
    return res.status(500).json({ messageError: "Professor não cadastrado.",error });
  }
};

export const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.findAll();
    if (!professors)
      return res.status(404).json({ messageError: "Nenhum professor encontrado." });
    return res.status(200).json({ professors });
  } catch (error) {
    return res.status(500).json({ messageError: "Não foi possível retornar os professores.",error });
  }
};

export const deleteProfessor = async (req, res) => {
  try {
    const { id } = req.params;

    await Professor.destroy({
      where: { id },
    });
    return res.status(200).json({ messageSuccess: "Professor deletado com sucesso." });
  } catch (error) {
    return res.status(500).json({ messageError: "Professor não deletado.",error });
  }
};

export const updateProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, stars } = req.body;

    const updateFields = {};
    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (stars) updateFields.stars = stars;

    if (Object.keys(updateFields).length === 0)
      return res.status(400).json({ messageError: "Nenhum parâmetro para atualizar." });

    const [updated] = await Professor.update(updateFields, {
      where: { id },
    });

    if (!updated)
      return res.status(404).json({ messageError: "Professor não encontrado." });

    const updatedProfessor = await Professor.findByPk(id);
    return res.status(200).json({ messageSuccess: "Professor atualizado com sucesso." });
  } catch (error) {
    return res.status(500).json({ messageError: "Professor não atualizado." ,error});
  }
};

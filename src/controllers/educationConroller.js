import Education from "../models/educationModel.js";

export const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    return res
      .status(200)
      .json({ message: "get all Education", data: education });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getEducationById = async (req, res) => {
  const educationId = req.params.id;

  try {
    const education = await Education.findById(educationId);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    return res
      .status(200)
      .json({ message: "Education by id", data: education });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const createEducation = async (req, res) => {
  const { institution, degree, description } = req.body;
  try {
    const education = new Education({ institution, degree, description });
    const saveeducation = await education.save();
    return res
      .status(201)
      .json({ message: "create Education", data: saveeducation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

export const updateEducation = async (req, res) => {
  const { institution, degree, description } = req.body;
  const educationId = req.params.id;

  try {
    const education = await Education.findById(educationId);

    if (!education) {
      return res.status(404).json({ message: " Education not found" });
    }

    education.institution = institution;
    education.degree = degree;
    education.description = description;

    const updatedEducation = await education.save();
    return res
      .status(200)
      .json({ message: "update Education", data: updatedEducation });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEducation = await Education.findByIdAndDelete(id);
    if (!deletedEducation) {
      return res.status(404).json({ message: "delete not found" });
    }
    return res
      .status(200)
      .json({ message: "update Education", data: deletedEducation });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

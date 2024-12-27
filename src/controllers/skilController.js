import Skil from "../models/skilModel.js";

export const getSkil = async (req, res) => {
  try {
    const skil = await Skil.find();
    return res.status(200).json({ message: "get all SKil", data: skil });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getSkilById = async (req, res) => {
  const skilId = req.params.id;

  try {
    const skil = await Skil.findById(skilId);
    if (!skil) {
      return res.status(404).json({ message: "Skil not found" });
    }
    return res.status(200).json({ message: "Skil by id", data: skil });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const createSkil = async (req, res) => {
  const { name } = req.body;
  try {
    const skil = new Skil({ name });
    const saveSkil = await skil.save();
    return res.status(201).json({ message: "create Skil", data: saveSkil });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

export const updateSkil = async (req, res) => {
  const { name } = req.body;
  const skilId = req.params.id;

  try {
    const skil = await Skil.findById(skilId);

    if (!skil) {
      return res.status(404).json({ message: " Skil not found" });
    }

    skil.name = name;

    const updatedSkil = await skil.save();
    return res.status(200).json({ message: "update SKil", data: updatedSkil });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const deleteSkil = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkil = await Skil.findByIdAndDelete(id);
    if (!deletedSkil) {
      return res.status(404).json({ message: "delete not found" });
    }
    return res.status(200).json({ message: "update Skil", data: deletedSkil });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

import Organizational from "../models/organizationalModel.js";

export const getOrganizational = async (req, res) => {
  try {
    const organizational = await Organizational.find();
    return res
      .status(200)
      .json({ message: "get all Organizational", data: organizational });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getOrganizationalById = async (req, res) => {
  const organizationalId = req.params.id;

  try {
    const organizational = await Organizational.findById(organizationalId);
    if (!organizational) {
      return res.status(404).json({ message: "Organizational not found" });
    }
    return res
      .status(200)
      .json({ message: "Organizational by id", data: organizational });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const createOrganizational = async (req, res) => {
  const { name, description } = req.body;
  try {
    const organizational = new Organizational({ name, description });
    const saveOrganizational = await organizational.save();
    return res
      .status(201)
      .json({ message: "create Organizational", data: saveOrganizational });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

export const updateOrganizational = async (req, res) => {
  const { name, description } = req.body;
  const organizationalId = req.params.id;

  try {
    const organizational = await Organizational.findById(organizationalId);

    if (!organizational) {
      return res.status(404).json({ message: " Organizational not found" });
    }

    organizational.name = name;
    organizational.description = description;

    const updatedOrganizational = await organizational.save();
    return res
      .status(200)
      .json({ message: "update Organizational", data: updatedOrganizational });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const deleteOrganizational = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrganizational = await Organizational.findByIdAndDelete(id);
    if (!deletedOrganizational) {
      return res.status(404).json({ message: "delete not found" });
    }
    return res
      .status(200)
      .json({ message: "update Organizational", data: deletedOrganizational });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

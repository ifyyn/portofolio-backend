import About from "../models/aboutModel.js";

export const getCAbout = async (req, res) => {
  try {
    const about = await About.find();
    return res.status(200).json({ message: "get all About", data: about });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getAboutById = async (req, res) => {
  const aboutId = req.params.id;

  try {
    const about = await Work.findById(aboutId);
    if (!about) {
      return res.status(404).json({ message: "work not found" });
    }
    return res.status(200).json({ message: "work by id", data: about });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const createAbout = async (req, res) => {
  const { description } = req.body;
  try {
    const about = new About({ description });
    const saveAbout = await about.save();
    return res.status(201).json({ message: "create About", data: saveAbout });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

export const updateAbout = async (req, res) => {
  const { description } = req.body;
  const aboutId = req.params.id;

  try {
    const about = await About.findById(aboutId);

    if (!about) {
      return res.status(404).json({ message: " About not found" });
    }

    about.description = description;

    const updatedAbout = await about.save();
    return res
      .status(200)
      .json({ message: "update About", data: updatedAbout });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAbout = await About.findByIdAndDelete(id);
    if (!deletedAbout) {
      return res.status(404).json({ message: "delete not found" });
    }
    return res
      .status(200)
      .json({ message: "update About", data: deletedAbout });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

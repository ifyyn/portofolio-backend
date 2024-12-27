import Work from "../models/workModel.js";
import { uploadRemover } from "../utils/uploadRemover.js";
export const getWork = async (req, res) => {
  try {
    const work = await Work.find();
    return res.status(200).json({ message: "get all work", data: work });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getWorkById = async (req, res) => {
  const workId = req.params.id;

  try {
    const work = await Work.findById(workId);
    if (!work) {
      return res.status(404).json({ message: "work not found" });
    }
    return res.status(200).json({ message: "work by id", data: work });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const createWork = async (req, res) => {
  const { title, description, link } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const work = new Work({ title, description, image, link });
    const saveWork = await work.save();
    return res.status(201).json({ message: "create work", data: saveWork });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

export const updateWork = async (req, res) => {
  const { title, description, link } = req.body;
  const workId = req.params.id;
  const newImage = req.file ? req.file.filename : null;

  try {
    const work = await Work.findById(workId);

    if (!work) {
      return res.status(404).json({ message: " work not found" });
    }

    if (newImage) {
      uploadRemover(work.image);
    }
    work.title = title;
    work.description = description;
    work.image = newImage ? newImage : work.image;
    work.link = link;
    const updatedWork = await work.save();
    return res.status(200).json({ message: "update work", data: updatedWork });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWork = await Work.findByIdAndDelete(id);
    if (!deletedWork) {
      return res.status(404).json({ message: "delete not found" });
    }
    return res.status(200).json({ message: "update work", data: deletedWork });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

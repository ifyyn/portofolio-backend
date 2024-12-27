import express from "express";
import {
  createEducation,
  deleteEducation,
  getEducation,
  getEducationById,
  updateEducation,
} from "../controllers/educationConroller.js";

const educationRoute = express.Router();

educationRoute.get("/education", getEducation);
educationRoute.get("/education/:id", getEducationById);
educationRoute.post("/education", createEducation);
educationRoute.put("/education/:id", updateEducation);
educationRoute.delete("/education/:id", deleteEducation);

export default educationRoute;

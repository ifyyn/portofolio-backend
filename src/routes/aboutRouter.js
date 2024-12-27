import express from "express";
import {
  deleteAbout,
  createAbout,
  getCAbout,
  updateAbout,
  getAboutById,
} from "../controllers/aboutController.js";

const aboutRoute = express.Router();

aboutRoute.get("/about", getCAbout);
aboutRoute.get("/about/:id", getAboutById);
aboutRoute.post("/about", createAbout);
aboutRoute.put("/about/:id", updateAbout);
aboutRoute.delete("/about/:id", deleteAbout);

export default aboutRoute;

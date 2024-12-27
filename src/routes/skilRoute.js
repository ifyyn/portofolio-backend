import express from "express";
import {
  createSkil,
  deleteSkil,
  getSkil,
  getSkilById,
  updateSkil,
} from "../controllers/skilController.js";

const skilRoute = express.Router();

skilRoute.get("/skil", getSkil);
skilRoute.get("/skil/:id", getSkilById);
skilRoute.post("/skil", createSkil);
skilRoute.put("/skil/:id", updateSkil);
skilRoute.delete("/skil/:id", deleteSkil);

export default skilRoute;

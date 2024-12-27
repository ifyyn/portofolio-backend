import express from "express";
import {
  createOrganizational,
  deleteOrganizational,
  getOrganizational,
  getOrganizationalById,
  updateOrganizational,
} from "../controllers/organizationalController.js";

const organizationalRoute = express.Router();

organizationalRoute.get("/organizational", getOrganizational);
organizationalRoute.get("/organizational/:id", getOrganizationalById);
organizationalRoute.post("/organizational", createOrganizational);
organizationalRoute.put("/organizational/:id", updateOrganizational);
organizationalRoute.delete("/organizational/:id", deleteOrganizational);

export default organizationalRoute;

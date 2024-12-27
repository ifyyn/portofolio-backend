import express from "express";
import {
  getWork,
  createWork,
  getWorkById,
  updateWork,
  deleteWork,
} from "../controllers/workController.js";
import { upload } from "../middlewares/upload.js";
const workRouter = express.Router();

workRouter.get("/work", getWork);
workRouter.get("/work/:id", getWorkById);
workRouter.post("/work", upload.single("image"), createWork);
workRouter.put("/work/:id", upload.single("image"), updateWork);
workRouter.delete("/work/:id", deleteWork);

export default workRouter;

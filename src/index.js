import express from "express";
import dotenv from "dotenv";
import dbPortofolio from "./config/db_portofolio.js";
import workRouter from "./routes/workRouter.js";
import educationRoute from "./routes/educationRouter.js";
import organizationalRoute from "./routes/organizationalRouter.js";
import aboutRoute from "./routes/aboutRouter.js";
import skilRoute from "./routes/skilRoute.js";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("public/uploads"));
app.use(cors());
app.use(morgan("dev"));
// router
app.use("/api/v1", workRouter);
app.use("/api/v1", educationRoute);
app.use("/api/v1", organizationalRoute);
app.use("/api/v1", aboutRoute);
app.use("/api/v1", skilRoute);

// db connected
dbPortofolio();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

import express from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/login-admin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").not().isEmpty().withMessage("password is required"),
  ],
  login
);
router.post(
  "/register-admin",
  [
    body("username").not().isEmpty().withMessage("username is required"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").not().isEmpty().withMessage("password is required"),
  ],
  register
);

export default router;

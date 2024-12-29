import Auth from "../models/authModel.js";
import { comparePassword } from "../utils/passwordHasher.js";
import { generateAccesToken } from "../utils/tokenManager.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const auth = await Auth.findOne({ email });

    if (auth) {
      return res.status(409).json({ message: "user already exists" });
    }
    const newAuth = await Auth.create({ username, email, password });
    return res.status(201).json({ message: "auth created", data: newAuth });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "unable to register" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt with email: ${email}`);

    const auth = await Auth.findOne({ email });

    if (!auth) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePassword(password, auth.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccesToken({
      authId: auth._id,
      userName: auth.username,
    });

    console.log("Login successful");
    return res
      .status(200)
      .json({ message: "Login successful", data: { accessToken } });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Unable to login" });
  }
};

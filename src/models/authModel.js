import mongoose from "mongoose";
import { passwordHasher } from "../utils/passwordHasher.js";
const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

authSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const hashed = await passwordHasher(this.get("password"));
    this.set("password", hashed);
  }
});

const Auth = mongoose.model("Auth", authSchema);

export default Auth;

import mongoose from "mongoose";

const SkilSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const skil = mongoose.model("Skil", SkilSchema);
export default skil;

import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Education = mongoose.model("Education", EducationSchema);
export default Education;

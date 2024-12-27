import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
const Courses = mongoose.model("Courses", CoursesSchema);
export default Courses;

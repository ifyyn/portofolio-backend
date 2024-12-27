import mongoose from "mongoose";

const OrganizationalSchema = new mongoose.Schema(
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
const Organizational = mongoose.model("Organizational", OrganizationalSchema);
export default Organizational;

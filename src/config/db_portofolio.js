import mongoose from "mongoose";

const dbPortofolio = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbPortofolio;

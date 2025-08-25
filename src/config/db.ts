import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });
    await mongoose.connect(config.MONGO_URI, { autoIndex: true });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;

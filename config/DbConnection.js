import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB Connected");
  } catch (err) {
    console.log("Error:", err);
    throw err; // Throw error to handle it in the caller function
  }
};

export default Connection;

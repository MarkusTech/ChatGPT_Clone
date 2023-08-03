import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const mongoDB = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log(
      `Connected to MongoDB ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`.bgRed.white);
  }
};

export default connectDB;

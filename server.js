import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";

// routes path
import authRoutes from "./routes/authRoutes.js";
import openaiRoutes from "./routes/openaiRoutes.js";
// dotenv
dotenv.config();
const port = process.env.PORT;

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

// Database
connectDB();

// api
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);

// listen server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgCyan.white);
});

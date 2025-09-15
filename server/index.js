import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running"));

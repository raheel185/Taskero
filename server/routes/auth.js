import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  try {
    return res.json({ testing: "Rest API" });
  } catch (error) {}
});

export default userRouter;

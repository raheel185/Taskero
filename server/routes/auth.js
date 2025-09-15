import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  try {
    return res.json({ Testing: "Rest API Login" });
  } catch (error) {}
});

userRouter.post("/register", async (req, res) => {
  try {
    return res.json({ Testing: "Rest API Register" });
  } catch (error) {}
});

export default userRouter;

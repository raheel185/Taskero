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
    const { email, password } = req.body;

    // Check if user exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.json({ message: "User already Exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // creating user
    user = new UserModel({
      email,
      password: hashPassword,
    });

    await user.save();

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token, abcd: user._id });
  } catch (error) {
    return res.json({ Testing: error.message });
  }
});

export default userRouter;

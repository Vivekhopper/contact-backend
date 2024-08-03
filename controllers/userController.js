import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config({ path: "./config/.env" });

const Register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    // Generate JWT token for authenticated user
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2d" });

    // Send success response with token and user details (including username)
    res.status(200).json({
      message: "Login successful",
      token,
      user: { _id: user._id, email: user.email, username: user.username } // Correctly include the 'username' field here
    });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

const auth = (req, res) => {
  return res.json({ success: true, user: req.user });
};

export { Register, Login,auth };

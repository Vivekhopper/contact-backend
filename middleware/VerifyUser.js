import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";
// import dotenv from "dotenv";
// dotenv.config({ path: "./config/.env" });
export const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("Token received:", token); // Add this line for logging
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        console.log("Payload from token:", payload); // Add this line for logging
        const user = await UserModel.findById(payload._id).select("-password");
        if (!user) {
          console.error("User not found with id:", payload._id);
          return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
      } catch (err) {
        console.error("Error retrieving user:", err);
        return res.status(500).json({ error: err.message });
      }
    });
  } else {
    console.error("Authorization header missing or incorrect");
    return res.status(403).json({ error: "Forbidden" });
  }
};

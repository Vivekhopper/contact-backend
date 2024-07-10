import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./config/DbConnection.js";
import Router from "./routes/routes.js";

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://contact-front-end-fawn.vercel.app",
  methods: ["GET", "PUT", "POST", "DELETE"],
  credentials: true,
}));

app.use("/contact", Router);

Connection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

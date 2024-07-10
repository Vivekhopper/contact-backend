import express from "express";
import dotenv from "dotenv";
import Connection from "./config/DbConnection.js";
import cors from "cors";
import  Router  from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin:["https://contact-front-end-fawn.vercel.app"],
  methods:["GET","PUT","POST","DELETE"],
  credentials:true
}));
app.use("/contact", Router);
dotenv.config({ path: "./config/.env" });

// Establish the database connection
Connection()
  .then(() => {
    // Start the server only after the DB connection is established
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './config/DbConnection.js';
import Router from './routes/routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  'https://contact-front-end-fawn.vercel.app/',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Use routes
app.use('/contact', Router);

// Connect to the database and start the server
Connection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

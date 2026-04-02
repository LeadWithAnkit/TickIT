import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// Trust proxy (needed for deployment like Render)
app.set("trust proxy", 1);

// Simple CORS setup
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://tickit-1-3e3l.onrender.com"
  ],
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("TickIt API is running...");
});

app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
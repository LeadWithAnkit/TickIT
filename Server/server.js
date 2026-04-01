import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// Trust the first proxy (Render uses proxies)
app.set("trust proxy", 1);

// --- CORS CONFIGURATION ---
const allowedOrigins = [
  "https://tickit-1-3e3l.onrender.com" // Your exact frontend URL
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// --- MIDDLEWARE ---
app.use(express.json());
app.use(cookieParser());

// --- DATABASE ---
connectDB();

// --- ROUTES ---

app.get("/", (req, res) => {
  res.send("TickIt API is running...");
});

app.use("/api/auth", authRoutes);

// --- SERVER ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
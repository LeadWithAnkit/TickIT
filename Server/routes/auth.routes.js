import express from "express";
import { testAuth } from "../controllers/auth.controller.js";

const router = express.Router();

// Test route
router.get("/test", testAuth);

export default router;
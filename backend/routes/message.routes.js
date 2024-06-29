import express from "express";
import protectRouter from "../middleware/protectRouter.middleware.js"; 
import { sendMessage } from "../controllers/sendMessage.controller.js";

const router = express.Router();

router.post("/send/:id", protectRouter, sendMessage);

export default router;

import express from "express";
import protectRouter from "../middleware/protectRouter.middleware.js"; 
import { sendMessage,getMessages } from "../controllers/sendMessage.controller.js";

const router = express.Router();

router.get("/:id",protectRouter,getMessages)
router.post("/send/:id", protectRouter, sendMessage);


export default router;

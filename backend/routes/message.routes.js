import express from "express";

import {sendMessage} from "../controllers/sendMessage.controller.js"

const router = express.Router();

router.post("/send/:id",sendMessage)

export default router;
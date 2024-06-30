import express from "express";
const router = express.Router();

import protectRouter from "../middleware/protectRouter.middleware.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

router.get("/",protectRouter,getUserForSideBar)

export default router;
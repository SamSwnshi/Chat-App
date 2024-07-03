import express from "express";

import protectRouter from "../middleware/protectRouter.middleware.js";
import { getUserForSideBar } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/",protectRouter,getUserForSideBar)

export default router;
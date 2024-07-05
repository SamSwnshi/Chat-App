import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js"

const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
    connectDB()
  console.log(`Server is running on port ${port}`);
});

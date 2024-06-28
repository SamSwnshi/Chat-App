import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

const app = express();

const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
    connectDB()
  console.log(`Server is running on port ${port}`);
});

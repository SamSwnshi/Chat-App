import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/auth.routes.js"

const app = express();

const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json())

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    connectDB()
  console.log(`Server is running on port ${port}`);
});

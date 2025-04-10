import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes"
import dotenv from "dotenv";
import PostJobsRoutes from "./routes/PostJobs"
import colors from "colors";
import connectDB from "./config/db";
import JobApplyRoutes from "./routes/JobApply"



dotenv.config();



const port = process.env.PORT;
const app = express();
const server = http.createServer(app);

connectDB();
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/postjob", PostJobsRoutes);
app.use("/api/applyJob", JobApplyRoutes);


server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
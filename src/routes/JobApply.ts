import express from "express";
import  {ApplyJob, getAllAppliedJobByJobId, getAllAppliedJobs, getAppliedJobById, updateStatus}  from "../controller/JobApply";
import { isAuthenticated } from "../middlewares/AuthMiddleware";


const router = express.Router();
// router.route("/").post(isAuthenticated, ApplyJob);
router.post("/", isAuthenticated, ApplyJob);
  router.get("/", getAllAppliedJobs)
  router.get("/:id", getAppliedJobById);
  router.get("/job/:jobId", getAllAppliedJobByJobId);
  router.put("/job/:id", updateStatus);

export default router;
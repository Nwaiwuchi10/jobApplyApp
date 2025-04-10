
  import express from "express";
import { getAllCreatedByUserJobs, getAllPostJobs, getPostJobById, postJob } from "../controller/PostJobs";
  
  const router = express.Router();
  
  router.post("/", postJob);
  router.get("/", getAllPostJobs)
  router.get("/:id", getPostJobById);
  router.get("/jobs/:postedBy",getAllCreatedByUserJobs);
  export default router; 
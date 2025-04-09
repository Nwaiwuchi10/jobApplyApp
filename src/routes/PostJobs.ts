
  import express from "express";
import { postJob } from "../controller/PostJobs";
  
  const router = express.Router();
  
  router.post("/", postJob);

  export default router;

import { Request, Response } from "express";
import { ApplyNewJob, getAllAppliedJobId, getAllJobs, getJobById, getPostedJobById } from "../services/JobApply";


export const ApplyJob = async (req: any, res: any) => {
  try {
    const { jobId, applicant } = req.body;
const userId=req.user
    if (!jobId || !applicant) {
      return res.status(400).json({
        message: "Job ID and applicant are required.",
        success: false,
      });
    }

    const job = await getPostedJobById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    const newApplication = await ApplyNewJob(jobId, applicant);

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong.",
      success: false,
      error: error.message,
    });
  }
};
 export const getAllAppliedJobs = async (req: Request, res: Response) => {
    try {
      const jobs = await getAllJobs();
      res.status(201).json(jobs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const getAllAppliedJobByJobId = async (req: any, res: Response) => {
    try {
      const jobId= req.params.jobId
      const jobs = await getAllAppliedJobId(jobId);
      res.status(201).json(jobs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const getAppliedJobById = async (
    req: any, 
    res: any
  ) => {
    try {
      const data: any = await getJobById(req.params.id);
      if (!data) return res.status(404).json({ message: "Job not found" });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  };
import { Request, Response } from "express";
import { createNewJob, getAllJobs, getAllPostedByUserJobs, getJobById, } from "../services/PostJob";



export const postJob = async (req: Request, res: Response) => {
    try {
      const {
        companyName,
        title,
        description,
        requirements,
        role,
        openTo,
        payPeriod,
        category,
        postedBy,
        jobType,
        jobState, // fixed casing
        country,
        state,
        city,
        fixedSalary,
        minSalary,
        maxSalary,
        address,
        contactNumber,
        deadline,
        duration,
        imageUrl,
      } = req.body;
  
      const job = await createNewJob(
        companyName,
        title,
        description,
        requirements,
        role,
        openTo,
        payPeriod,
        category,
        postedBy,
        jobType,
        jobState, // fixed casing
        country,
        state,
        city,
        fixedSalary,
        minSalary,
        maxSalary,
        address,
        contactNumber,
        deadline,
        duration,
        imageUrl
      );
  
      res.status(201).json(job);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  export const getAllPostJobs = async (req: Request, res: Response) => {
    try {
      const jobs = await getAllJobs();
      res.status(201).json(jobs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const getAllCreatedByUserJobs = async (req: any, res: Response) => {
    try {
      const postedBy=req.params.postedBy
      const jobs = await getAllPostedByUserJobs(postedBy);
      res.status(201).json(jobs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const getPostJobById = async (
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
  
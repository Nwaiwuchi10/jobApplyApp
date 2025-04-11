import { Request, Response } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../services/Auth";


export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await registerUser(firstName, lastName, email, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
 export const getAllUser = async (req: any, res: Response) => {
    try {
    
      const users = await getUsers();
      res.status(201).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const getSingleUser = async (
    req: any, 
    res: any

  ) => {
    try {
      const id:string=req.params.id
      const data: any = await getUserById(id);
      if (!data) return res.status(404).json({ message: "User not found" });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  };

import express from "express";
import { getAllUser, getSingleUser, login, logout, register } from "../controller/AuthController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/logout", logout);
export default router;
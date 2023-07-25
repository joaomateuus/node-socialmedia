import express from "express";
import { upload } from "../config/multer";
import { AuthController } from "../controllers/auth";
import multer from "multer";

const authController = new AuthController();
const router = express.Router();

router.post("/sign_up", authController.createUser)
router.post("login")

export { router as authRoutes};

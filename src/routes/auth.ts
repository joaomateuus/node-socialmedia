import express from "express";
import { storage } from "../config/multer";
import { AuthController } from "../controllers/auth";
import multer from "multer";

const authController = new AuthController();
const router = express.Router();
const upload = multer({ storage: storage });

router.post("/sign_up", upload.single("profile_picture"), authController.createUser)
router.post("login")

export { router as authRoutes};

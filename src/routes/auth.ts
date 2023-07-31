import express from "express";
import { AuthController } from "../controllers/auth";

const authController = new AuthController();
const router = express.Router();

router.post("/sign_up", authController.createUserController)
router.post("/login", authController.loginUserController)

export { router as authRoutes};

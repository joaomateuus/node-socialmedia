import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { PostsController } from "../controllers/core/posts";

const router = express.Router();
const postsController = new PostsController();

router.get("/posts", authMiddleware, postsController.getPostsController)

export { router as coreRoutes};

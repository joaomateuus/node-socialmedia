import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { PostsController } from "../controllers/core/posts";
import { upload } from "../config/multer";

const router = express.Router();
const postsController = new PostsController();

router.get(
    "/posts",
    authMiddleware,
    postsController.getPostsController
)
router.post(
    "/posts",
    authMiddleware,
    upload.single("post"),
    postsController.createPostController
)

export { router as coreRoutes};

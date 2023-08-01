import { Request, Response } from "express";
import { PostService } from "../../../services/core/posts";
import { mountMediaUrl } from "../../../utils";

const postService = new PostService();

export class PostsController{
    async createPostController(req: Request, res: Response){
        try {
            if(req.file !== undefined && req.body.media_type !== 'TEXT') {
                const media_url = mountMediaUrl(req.body.media_type, req.file.filename)
                req.body["media_url"] = media_url
                console.log(req.body);	
            }

            const newPost = await postService.createPostService(req.body);
            return res.status(201).json(newPost)
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }

    async getPostsController(req: Request, res: Response){
        try {
            const posts = await postService.getPostsService(req.body);
            return res.status(200).json(posts)
        } catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    }
}
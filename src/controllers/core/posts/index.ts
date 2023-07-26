import { Request, Response } from "express";

export class PostsController{
    async getPostsController(req: Request, res: Response){
        console.log("req chegou");
    }
}
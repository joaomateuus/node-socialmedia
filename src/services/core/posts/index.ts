import { Post } from "@prisma/client";
import { prisma } from "../../../config/db";

export class PostService{
    async getPostsService(data: Post){
        const posts = await prisma.post.findMany()
        return posts
    }

    async createPostService(data: Post){
        const {
            content,
            media_type,
            media_url,
            authorId,
        } = data;	

        const creation_date = new Date();

        const newPost = await prisma.post.create({
            data: {
                content,
                creation_date: creation_date.toISOString(),
                media_type,
                media_url: media_url ? media_url : null,
                author: {
                    connect: {
                        id: (
                            typeof authorId === 'string'
                            ? parseInt(authorId) 
                            : authorId
                        )
                    }
                }
            }
        })

        return newPost
    }

    // async deletePostService(data){}

    // async editPostService(data){}

}
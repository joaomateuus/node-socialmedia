import { Request, Response } from "express";
import { AuthService } from "../../services/auth";
import { Prisma } from "@prisma/client";

const authService = new AuthService();

export class AuthController {
    async createUser (req: Request, res: Response) {
        // if(req.file !== undefined) {
        //     const fileName = `http://localhost:3000/uploads/images/${req.file.filename}`
        //     req.body["profile_picture"] = fileName
        //     console.log(req.body);	
        // }
        try {
            const createdUser = await authService.createUserService(req.body);
            return res.status(201).json(createdUser)
        } catch (error: any) {
            res.status(400)
            return res.json({error: error.message})
        }
    }

    async editUser (req: Request, res: Response) {}

    async deleteUser (req: Request, res: Response) {}

    async login (req: Request, res: Response) {}

}
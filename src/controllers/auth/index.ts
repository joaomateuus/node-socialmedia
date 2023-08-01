import { Request, Response } from "express";
import { AuthService } from "../../services/auth";

const authService = new AuthService();

export class AuthController {
    async createUserController(req: Request, res: Response) {
        try {
            const createdUser = await authService.createUserService(req.body);
            return res.status(201).json(createdUser)
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }

    async loginUserController(_req: Request, _res: Response): Promise<Response>{
        try {
            const { username, password } = _req.body;
            const data = await authService.loginUserService(username, password);
            return _res.status(200).json(data)
        } catch (error: any) {
            return _res.status(403).json({error: error.message})
        }
    }

    async editUserController(req: Request, res: Response) {
        // if(req.file !== undefined) {
        //     const fileName = `http://localhost:3000/uploads/images/${req.file.filename}`
        //     req.body["profile_picture"] = fileName
        //     console.log(req.body);	
        // }
    }

    async deleteUserController(req: Request, res: Response) {}

    

}
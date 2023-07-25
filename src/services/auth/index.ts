import { User } from "../../interfaces/User";
import { prisma } from "../../config/db";
import bcrypt from "bcrypt";

export class AuthService {
    async createUserService(data: User) {
        const { username, email, password } = data;

        if(!username) {
            throw new Error("Username is required");
        }

        if(!email) {
            throw new Error("Email is required");
        }

        if(!password) {
            throw new Error("Password is required");
        }

        const userExists = await prisma.user.findFirst({where: {
            OR: [
                {email},
                {username}
            ]
        }})
        
        if (userExists) {
            throw new Error("This email or username is already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                profile_picture: data.profile_picture ? data.profile_picture : null
            }
        });
        const { password:_, ...user } = newUser
        return user
    }
}
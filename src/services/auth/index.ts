import { User } from "../../interfaces/User";
import { prisma } from "../../config/db";
import bcrypt from "bcrypt";
import { GenerateTokenProvider } from "../../providers/generate-token";

export class AuthService {
    async createUserService(data: User) {
        const { 
            username,
            email,
            name,
            surname,
            password 
        } = data;

        if(!name || !surname) {
            throw new Error("Name and surname are required");
        }

        if(!username) throw new Error("Username is required");
        
        if(!email) throw new Error("Email is required");
        
        if(!password) throw new Error("Password is required");

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
                name,
                surname,
                username,
                password: hashedPassword,
            }
        });
        const { password:_, ...user } = newUser
        return user
    }

    async loginUserService(username: string, password: string){
        const user = await prisma.user.findFirst({where: {username}});
        if (!user) throw new Error( "Email or password are incorrect")
        
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            throw new Error ("Email or password are incorrect")
        }
        
        const tokenProvider = new GenerateTokenProvider;
        const token = await tokenProvider.generateToken(user.id);

        return {username: user.username, token: token}
    }
}
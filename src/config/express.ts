import express from "express";
import morgan from "morgan";
import cors from "cors";
import { authRoutes } from "../routes/auth";

const createServer = (): express.Application => {
    const app = express();
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());
    app.use(morgan('dev'));
    app.use("/account/auth", authRoutes)
    app.use(cors({
        origin: '*'
    }));
    
    return app;
};

export {createServer};
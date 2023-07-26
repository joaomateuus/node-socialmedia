import express from "express";
import morgan from "morgan";
import cors from "cors";
import { authRoutes } from "../routes/auth";
import { coreRoutes } from "../routes";

const createServer = (): express.Application => {
    const app = express();
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());
    app.use(morgan('dev'));

    app.use("/uploads/images", express.static("uploads/images"))
    // app.use("/uploads/videos", express.static("uploads/videos"))

    app.use("/account/auth", authRoutes)
    app.use("/api/v1", coreRoutes)
        
    app.use(cors({
        origin: '*'
    }));
    
    return app;
};

export {createServer};
import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("uploads/images"))
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}_${file.originalname}`)
    }
});
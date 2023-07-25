import multer from "multer";
import path from "path";
import fs from "fs";

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
const videoExtensions = [".mp4", ".mov", ".avi"];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        let fileType = "others";

        if (imageExtensions.includes(fileExtension)) {
            fileType = "images";
        } else if (videoExtensions.includes(fileExtension)) {
            fileType = "videos";
        }

        const destinationPath = path.resolve(`uploads/${fileType}`);

        if (!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath);
        }

        cb(null, destinationPath);
    },
    filename: async (req, file, cb) => {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        const fileType = imageExtensions.includes(fileExtension) ? "images" : "videos";
        const destinationPath = path.resolve(`uploads/${fileType}`);
        const fileName = `${file.originalname.replace(/[^a-zA-Z0-9_.]/g, "")}`;

        try {
            const filesInDestination = fs.readdirSync(destinationPath);
            const duplicateFiles = filesInDestination.filter((fileInDest) => fileInDest === fileName);

            for (const duplicateFile of duplicateFiles) {
                fs.unlinkSync(path.join(destinationPath, duplicateFile));
            }
        } catch (error) {
            console.error("Error deleting duplicate images", error);
        }

        cb(null, fileName);
    }
});

export const upload = multer({ storage: storage });

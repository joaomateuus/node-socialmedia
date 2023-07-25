import { Like } from "./Like";
import { User } from "./User";
import { Share } from "./Share";

export interface Post {
    id: number;
    content: string;
    media_type: MediaType;
    media_url?: string | null;
    creation_date: Date;
    author: User;
    likes?: Like[];
    comments?: Comment[];
    shares?: Share[];
  }

enum MediaType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
}
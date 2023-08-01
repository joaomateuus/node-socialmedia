import { Like } from "./Like";
import { Share } from "./Share";

export interface Post {
  id?: number;
  content: string;
  media_type: MediaType;
  media_url?: string | null;
  creation_date: Date;
  authorId: number;
  likes?: Like[];
  comments?: Comment[];
  shares?: Share[];
}

enum MediaType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}
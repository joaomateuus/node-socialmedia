import { Post } from "./Post";
import { User } from "./User";

export interface Comment {
    id: number;
    content: string;
    creation_date: Date;
    user: User;
    post: Post;
}
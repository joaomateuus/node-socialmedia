import { Post } from "./Post";
import { User } from "./User";

export interface Like {
    id: number;
    user: User;
    post: Post;
}
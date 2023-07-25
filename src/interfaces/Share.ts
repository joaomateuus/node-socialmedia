import { User } from "./User";
import { Post } from "./Post";

export interface Share {
    id: number;
    share_date: Date;
    user: User;
    post: Post;
}
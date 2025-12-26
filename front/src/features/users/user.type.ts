import { Post } from '../posts/post.type';
import { Video } from '../videos/video.type';

export type User = {
  id: number;
  name: string;
  createdAt: string;
};

export type MyPostsResponse = User & {
  _count: { select: { posts: number } };
  posts: (Post & {
    user: { id: number; name: string };
    video: Video;
  })[];
};

export type MyPageResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    createdAt: string;
  };
  postCount: number;
  videoCount: number;
};

export type CreateUserResult = { success: true } | { success: false; message: string };

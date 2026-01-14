import { Video } from '../videos/video.type';

export type Post = {
  id: number;
  userId: number;
  videoId: number;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type Like = {
  id: number;
  postId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type PostListResponse = Post & {
  _count: { likes: number };
  user: {
    id: number;
    name: string;
  };
  video: Video;
  likes: Like[];
  isLiked: boolean;
};

export type PostDetailResponse = Post & {
  video: Video;
};

export type CreatePostResult =
  | { success: true; postId: number }
  | { success: false; message: string };
export type UpdatePostResult = { success: true } | { success: false; message: string };

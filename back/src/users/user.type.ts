import { Like, Provider, Video } from '@prisma/client';

export type MyPostsResponse = {
  id: number;
  name: string;
  _count: { posts: number };
  posts: {
    _count: { likes: number };
    user: { id: number; name: string };
    video: Video;
    likes: Like[];
    isLiked: boolean;
  }[];
};

export type MyPageResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    provider: Provider;
    createdAt: Date;
  };
  postCount: number;
  videoCount: number;
};

export type SuccessResponse = {
  success: true;
};

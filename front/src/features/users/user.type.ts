import { Like, Post } from '../posts/post.type';
import { Video } from '../videos/video.type';

type Provider = 'local' | 'google' | 'github';

export type MyPostsResponse = {
  id: number;
  name: string;
  _count: { select: { posts: number } };
  posts: (Post & {
    _count: { likes: number };
    user: { id: number; name: string };
    video: Video;
    likes: Like[];
    isLiked: boolean;
  })[];
};

export type MyPageResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    provider: Provider;
    createdAt: string;
  };
  postCount: number;
  videoCount: number;
};

export type CreateUserResult = { success: true } | { success: false; message: string };

import { Video } from '../videos/video.type';

export type Post = {
  id: number;
  userId: number;
  videoId: number;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type PostListResponse = Post & {
  user: {
    id: number;
    name: string;
  };
  video: Video;
};

export type SuccessResponse = {
  success: true;
}

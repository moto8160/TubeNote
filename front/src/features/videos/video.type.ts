import { Like } from '../posts/post.type';

export type Video = {
  id: number;
  videoUrl: string;
  embedUrl: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type VideoListResponse = Video & {
  _count: { posts: number };
  posts: {
    id: number;
    userId: number;
    videoId: number;
    text: string;
    status: 'public' | 'private';
    createdAt: string;
    updatedAt: string;
    user: {
      id: number;
      name: string;
    };
  }[];
};

export type VideoDetailResponse = Video & {
  _count: { posts: number };
  posts: {
    id: number;
    userId: number;
    videoId: number;
    text: string;
    status: 'public' | 'private';
    createdAt: string;
    updatedAt: string;
    user: {
      id: number;
      name: string;
    };
    _count: { likes: number };
    likes: Like[];
    isLiked: boolean;
  }[];
};

export type YoutubeOEmbedResponse = {
  html: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl: string;
};

export type fetchOEmbedResult =
  | {
      success: true;
      preview: YoutubeOEmbedResponse;
    }
  | {
      success: false;
      message: string;
    };

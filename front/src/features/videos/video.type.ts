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
    createdAt: string;
    updatedAt: string;
    user: {
      id: number;
      name: string;
    };
  }[];
};

export type VideoDetailResponse = VideoListResponse;

export type YoutubeOEmbedResponse = {
  html: string;
  title: string;
  author_name: string;
  author_url: string;
  thumbnail_url: string;
};

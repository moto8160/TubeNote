import { Like, Post, Prisma, Video } from '@prisma/client';

export type VideoListResponse = Prisma.VideoGetPayload<{
  include: {
    _count: { select: { posts: true } };
    posts: {
      include: {
        user: { select: { id: true; name: true } };
      };
    };
  };
}>;

export type VideoDetailResponse = Video & {
  _count: { posts: number };
  posts: Array<
    Post & {
      user: { id: number; name: string };
      _count: { likes: number };
      likes: Like[];
      isLiked: boolean;
    }
  >;
};

export type YoutubeOEmbedResponse = {
  html: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl: string;
};

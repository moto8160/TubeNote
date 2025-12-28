import { Prisma } from '@prisma/client';

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

export type VideoDetailResponse = Prisma.VideoGetPayload<{
  include: {
    _count: { select: { posts: true } };
    posts: {
      include: {
        user: { select: { id: true; name: true } };
      };
    };
  };
}>;

export class YoutubeOEmbedResponse {
  html: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl: string;
}

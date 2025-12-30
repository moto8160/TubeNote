import { Prisma } from '@prisma/client';

export type MyPostsResponse = Prisma.UserGetPayload<{
  select: {
    id: true;
    name: true;
    createdAt: true;
    _count: { select: { posts: true } };
    posts: {
      include: {
        user: { select: { id: true; name: true } };
        video: true;
      };
    };
  };
}>;

export type MyPageResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  };
  postCount: number;
  videoCount: number;
};

export type SuccessResponse = {
  success: true;
};

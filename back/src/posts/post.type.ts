import { Prisma } from '@prisma/client';

export type PostListResponse = Prisma.PostGetPayload<{
  include: {
    _count: { select: { likes: true } };
    user: { select: { id: true; name: true } };
    video: true;
    likes: true;
  };
}> & {
  isLiked: boolean;
};

export type PostDetailResponse = Prisma.PostGetPayload<{
  include: {
    video: true;
  };
}>;

export type SuccessResponse = {
  success: true;
};

export type PostCreateResponse = {
  success: true;
  postId: number;
};

export type PostDeleteResponse = {
  success: true;
  videoDeleted: boolean;
};

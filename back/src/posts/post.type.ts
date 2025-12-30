import { Prisma } from '@prisma/client';

export type PostListResponse = Prisma.PostGetPayload<{
  include: {
    user: { select: { id: true; name: true } };
    video: true;
  };
}>;

export type PostDetailResponse = Prisma.PostGetPayload<{
  include: {
    video: true;
  };
}>;

export type SuccessResponse = {
  success: true;
};

import { Prisma } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'URLが未入力です。' })
  videoUrl: string;

  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;
}

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;
}

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

export class SuccessResponse {
  success: true;
}

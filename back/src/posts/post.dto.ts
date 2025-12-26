import { Prisma } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'URLが未入力です' })
  videoUrl: string;

  @IsString()
  text: string;
}

export type PostListResponse = Prisma.PostGetPayload<{
  include: {
    user: { select: { id: true; name: true } };
    video: true;
  };
}>;

export class SuccessResponse {
  success: true;
}

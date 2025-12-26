import { Prisma } from '@prisma/client';
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'ユーザーネームが未入力です' })
  name: string;

  @IsEmail({}, { message: 'メールアドレスが正しくありません' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'パスワードは６文字以上で入力してください' })
  password: string;

  passwordConfirm: string;
}

export class SuccessResponse {
  success: true;
}

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

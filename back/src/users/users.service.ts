import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { Provider, User } from '@prisma/client';
import { MyPageResponse, MyPostsResponse } from './user.type';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyPosts(userId: number): Promise<MyPostsResponse> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        _count: { select: { posts: true } },
        posts: {
          orderBy: { updatedAt: 'desc' },
          include: {
            _count: { select: { likes: true } },
            user: { select: { id: true, name: true } },
            video: true,
            likes: { where: { userId } },
          },
        },
      },
    });

    return {
      ...user,
      posts: user.posts.map((post) => ({
        ...post,
        isLiked: post.likes.length > 0,
      })),
    };
  }

  async getMayPage(userId: number): Promise<MyPageResponse> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { id: true, name: true, email: true, provider: true, createdAt: true },
    });

    const postCount = await this.prisma.post.count({
      where: { userId },
    });

    const videos = await this.prisma.post.findMany({
      where: { userId },
      select: { videoId: true },
      distinct: ['videoId'],
    });
    const videoCount = videos.length;

    return { user, postCount, videoCount };
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findUserByProvider(provider: Provider, providerId: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { provider, providerId },
    });
  }

  async createUser(dto: CreateUserDto) {
    const { name, email, password, passwordConfirm } = dto;

    if (password !== passwordConfirm) {
      throw new BadRequestException('パスワードが一致しません');
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      throw new BadRequestException('メールアドレスが登録済みです');
    }

    const hash = await bcrypt.hash(password, 10);

    await this.prisma.user.create({
      data: { name, email, password: hash },
    });
  }

  async createOAuthUser(
    provider: Provider,
    profileId: string,
    username: string | null,
    email: string | null,
  ): Promise<User> {
    const dummyEmail =
      provider === Provider.google
        ? `google_${profileId}@example.com`
        : `github_${profileId}@example.com`;
    return this.prisma.user.create({
      data: {
        provider,
        providerId: profileId,
        name: username || '未設定', //null,undefined(??)に加えて、""の時も
        email: email || dummyEmail, //ユニーク制約あるため
      },
    });
  }
}

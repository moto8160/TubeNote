import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { VideosService } from 'src/videos/videos.service';
import { Post } from '@prisma/client';
import { PostDetailResponse, PostListResponse } from './post.type';

@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly videosService: VideosService,
  ) {}

  async findAll(userId: number): Promise<PostListResponse[]> {
    const posts = await this.prisma.post.findMany({
      orderBy: { updatedAt: 'desc' },
      include: {
        _count: { select: { likes: true } },
        user: { select: { id: true, name: true } },
        video: true,
        likes: { where: { userId } },
      },
    });

    return posts.map((post) => ({
      ...post,
      isLiked: post.likes.length > 0,
    }));
  }

  async findOne(postId: number): Promise<PostDetailResponse> {
    return this.prisma.post.findUniqueOrThrow({
      where: { id: postId },
      include: {
        video: true,
      },
    });
  }

  async create(userId: number, dto: CreatePostDto): Promise<Post> {
    // 未登録なら動画登録する
    const video = await this.videosService.findOrCreateByUrl(dto.videoUrl);

    return this.prisma.post.create({
      data: { userId, videoId: video.id, text: dto.text },
    });
  }

  async update(postId: number, dto: UpdatePostDto, userId: number) {
    await this.checkOwnPost(postId, userId);
    await this.prisma.post.update({
      where: { id: postId },
      data: { ...dto },
    });
  }

  async delete(postId: number, userId: number): Promise<{ videoDeleted: boolean }> {
    let videoDeleted = false;
    const post = await this.checkOwnPost(postId, userId);
    await this.prisma.post.delete({
      where: { id: postId },
    });

    // 動画に紐づく投稿は1件以上とるする
    const postCount = await this.countPostByVideoId(post.videoId);
    if (postCount === 0) {
      await this.videosService.delete(post.videoId);
      videoDeleted = true;
    }

    return { videoDeleted };
  }

  async checkOwnPost(postId: number, userId: number): Promise<Post> {
    const post = await this.prisma.post.findUniqueOrThrow({
      where: { id: postId },
    });

    if (post.userId !== userId) {
      throw new ForbiddenException();
    }

    return post;
  }

  async countPostByVideoId(videoId: number): Promise<number> {
    return this.prisma.post.count({
      where: { videoId },
    });
  }
}

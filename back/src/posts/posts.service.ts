import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto, PostListResponse } from './post.dto';
import { VideosService } from 'src/videos/videos.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly videosService: VideosService,
  ) {}

  async findAll(): Promise<PostListResponse[]> {
    return this.prisma.post.findMany({
      orderBy: { updatedAt: 'desc' },
      include: {
        user: { select: { id: true, name: true } },
        video: true,
      },
    });
  }

  async create(userId: number, dto: CreatePostDto) {
    // 未登録なら動画登録する
    const video = await this.videosService.findOrCreateByUrl(dto.videoUrl);

    await this.prisma.post.create({
      data: { userId, videoId: video.id, text: dto.text },
    });
  }

  async delete(postId: number, userId: number) {
    await this.checkOwnPost(postId, userId);
    await this.prisma.post.delete({
      where: { id: postId },
    });
  }

  async checkOwnPost(postId: number, userId: number) {
    const post = await this.prisma.post.findUniqueOrThrow({
      where: { id: postId },
    });

    if (post.userId !== userId) {
      throw new ForbiddenException();
    }
  }
}

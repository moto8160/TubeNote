import { Injectable } from '@nestjs/common';
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
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Video } from '@prisma/client';
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from './video.dto';

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<VideoListResponse[]> {
    return this.prisma.video.findMany({
      include: {
        _count: { select: { posts: true } },
        posts: {
          take: 1,
          include: {
            user: { select: { id: true, name: true } },
          },
          orderBy: { updatedAt: 'desc' },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findOne(videoId: number): Promise<VideoDetailResponse> {
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      include: {
        _count: { select: { posts: true } },
        posts: {
          include: {
            user: { select: { id: true, name: true } },
          },
          orderBy: { updatedAt: 'desc' },
        },
      },
    });

    if (!video) {
      throw new NotFoundException('video not found');
    }
    return video;
  }

  async findOrCreateByUrl(videoUrl: string): Promise<Video> {
    // 動画登録チェック
    const video = await this.prisma.video.findUnique({
      where: { videoUrl },
    });

    if (video) return video;

    // 未登録ならoEmbedを叩いて登録する
    const videoData = await this.fetchOEmbed(videoUrl);

    const embedUrl = videoData.html.match(/src="([^"]+)"/)![1];
    const { title, author_name, author_url, thumbnail_url } = videoData;

    return this.prisma.video.create({
      data: {
        videoUrl,
        embedUrl,
        title,
        authorName: author_name,
        authorUrl: author_url,
        thumbnailUrl: thumbnail_url,
      },
    });
  }

  async fetchOEmbed(videoUrl: string): Promise<YoutubeOEmbedResponse> {
    let url;

    try {
      url = new URL(videoUrl);
    } catch {
      throw new BadRequestException('URLの形式が正しくありません');
    }

    const fetchUrl = `https://www.youtube.com/oembed?url=${url}&format=json`;
    const res = await fetch(fetchUrl);

    if (!res.ok) {
      throw new BadRequestException('動画が存在しません');
    }

    return (await res.json()) as YoutubeOEmbedResponse;
  }
}

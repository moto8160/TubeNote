import { PrismaService } from 'src/prisma.service';
import { Video } from '@prisma/client';
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from './video.dto';
export declare class VideosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<VideoListResponse[]>;
    findOne(videoId: number): Promise<VideoDetailResponse>;
    findOrCreateByUrl(videoUrl: string): Promise<Video>;
    fetchOEmbed(videoUrl: string): Promise<YoutubeOEmbedResponse>;
}

import { VideosService } from './videos.service';
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from './video.dto';
export declare class VideosController {
    private readonly videosService;
    constructor(videosService: VideosService);
    findAll(): Promise<VideoListResponse[]>;
    findOne(id: number): Promise<VideoDetailResponse>;
    fetchOEmbed(videoUrl: string): Promise<YoutubeOEmbedResponse>;
}

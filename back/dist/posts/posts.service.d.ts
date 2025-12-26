import { PrismaService } from 'src/prisma.service';
import { CreatePostDto, PostListResponse } from './post.dto';
import { VideosService } from 'src/videos/videos.service';
export declare class PostsService {
    private readonly prisma;
    private readonly videosService;
    constructor(prisma: PrismaService, videosService: VideosService);
    findAll(): Promise<PostListResponse[]>;
    create(userId: number, dto: CreatePostDto): Promise<void>;
}

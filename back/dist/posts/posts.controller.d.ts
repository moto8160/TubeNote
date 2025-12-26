import { PostsService } from './posts.service';
import { CreatePostDto, PostListResponse, SuccessResponse } from './post.dto';
import type { JwtRequest } from 'src/auth/auth.type';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<PostListResponse[]>;
    create(dto: CreatePostDto, req: JwtRequest): Promise<SuccessResponse>;
}

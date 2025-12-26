import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, PostListResponse, SuccessResponse } from './post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { JwtRequest } from 'src/auth/auth.type';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostListResponse[]> {
    return this.postsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreatePostDto, @Request() req: JwtRequest): Promise<SuccessResponse> {
    const userId = req.user.userId;
    await this.postsService.create(userId, dto);
    return { success: true };
  }
}

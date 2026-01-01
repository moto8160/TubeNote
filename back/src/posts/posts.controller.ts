import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { JwtRequest } from 'src/auth/auth.type';
import { PostDeleteResponse, PostListResponse, SuccessResponse } from './post.type';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: JwtRequest): Promise<PostListResponse[]> {
    return this.postsService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreatePostDto, @Request() req: JwtRequest): Promise<SuccessResponse> {
    await this.postsService.create(req.user.userId, dto);
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePostDto,
    @Request() req: JwtRequest,
  ): Promise<SuccessResponse> {
    await this.postsService.update(id, dto, req.user.userId);
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: JwtRequest,
  ): Promise<PostDeleteResponse> {
    const { videoDeleted } = await this.postsService.delete(id, req.user.userId); //分割代入
    return { success: true, videoDeleted };
  }
}

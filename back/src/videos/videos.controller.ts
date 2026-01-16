import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from './video.type';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { JwtRequest } from 'src/auth/auth.type';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: JwtRequest): Promise<VideoListResponse[]> {
    return this.videosService.findAll(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: JwtRequest,
  ): Promise<VideoDetailResponse> {
    return this.videosService.findOne(id, req.user.userId);
  }

  @Post('/preview')
  async fetchOEmbed(@Body('videoUrl') videoUrl: string): Promise<YoutubeOEmbedResponse> {
    return this.videosService.fetchOEmbed(videoUrl);
  }
}

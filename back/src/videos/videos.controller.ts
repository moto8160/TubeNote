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
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from './video.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { JwtRequest } from 'src/auth/auth.type';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<VideoListResponse[]> {
    return this.videosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<VideoDetailResponse> {
    return this.videosService.findOne(id);
  }

  @Post('/preview')
  async fetchOEmbed(@Body('videoUrl') videoUrl: string): Promise<YoutubeOEmbedResponse> {
    return this.videosService.fetchOEmbed(videoUrl);
  }
}

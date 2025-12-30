import { Controller, Delete, Param, ParseIntPipe, Post, Request, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { JwtRequest } from 'src/auth/auth.type';

type SuccessResponse = {
  success: true;
};

@Controller('posts/:id/likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: JwtRequest,
  ): Promise<SuccessResponse> {
    await this.likesService.create(id, req.user.userId);
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: JwtRequest,
  ): Promise<SuccessResponse> {
    await this.likesService.delete(id, req.user.userId);
    return { success: true };
  }
}

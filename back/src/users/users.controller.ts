import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import type { JwtRequest } from 'src/auth/auth.type';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MyPageResponse, MyPostsResponse, SuccessResponse } from './user.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getMyPosts(@Request() req: JwtRequest): Promise<MyPostsResponse> {
    const userId = req.user.userId;
    return this.usersService.getMyPosts(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/mypage')
  async getMyPage(@Request() req: JwtRequest): Promise<MyPageResponse> {
    const userId = req.user.userId;
    return this.usersService.getMayPage(userId);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<SuccessResponse> {
    await this.usersService.createUser(dto);
    return { success: true };
  }
}

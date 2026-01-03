import { Body, Controller, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import type { JwtRequest } from 'src/auth/auth.type';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MyPageResponse, MyPostsResponse, SuccessResponse } from './user.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getMyPosts(@Request() req: JwtRequest): Promise<MyPostsResponse> {
    return this.usersService.getMyPosts(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/mypage')
  async getMyPage(@Request() req: JwtRequest): Promise<MyPageResponse> {
    return this.usersService.getMayPage(req.user.userId);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<SuccessResponse> {
    await this.usersService.createUser(dto);
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('edit')
  async updateUser(
    @Request() req: JwtRequest,
    @Body() dto: UpdateUserDto,
  ): Promise<SuccessResponse> {
    await this.usersService.updateUser(req.user.userId, dto);
    return { success: true };
  }
}

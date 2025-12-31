import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import type { GoogleRequest, SignInResponse } from './auth.type';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: SignInDto): Promise<SignInResponse> {
    return this.authService.signIn(dto);
  }

  // Googleログイン画面にリダイレクト
  @UseGuards(AuthGuard('google'))
  @Get('google')
  googleAuth() {}

  // 認証後のリダイレクト先
  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  async googleRedirect(@Request() req: GoogleRequest): Promise<SignInResponse> {
    return this.authService.googleSignIn(req.user.profileId, req.user.username, req.user.email);
  }
}

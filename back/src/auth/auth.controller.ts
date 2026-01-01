import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import type { GoogleRequest, SignInResponse } from './auth.type';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: SignInDto): Promise<SignInResponse> {
    return this.authService.signIn(dto);
  }

  // PassportがGoogle画面にリダイレクト
  // ログイン後はコールバックに指定したURLにリダイレクト
  @UseGuards(AuthGuard('google'))
  @Get('google')
  googleAuth() {}

  // コールバックURL
  // 認可コードの受け取りPassportがリソースを取得
  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  async googleRedirect(@Req() req: GoogleRequest, @Res() res: Response) {
    const response = await this.authService.googleSignIn(
      req.user.profileId,
      req.user.username,
      req.user.email,
    );
    res.redirect(`http://localhost:3000/login/google?token=${response.access_token}`);
  }
}

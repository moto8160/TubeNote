import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import type { GitHubRequest, GoogleRequest, SignInResponse } from './auth.type';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';
import { Provider } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: SignInDto): Promise<SignInResponse> {
    return this.authService.signIn(dto);
  }

  @Get('guest')
  async guestSignIn() {
    return this.authService.guestSignIn();
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
    const response = await this.authService.OAuthSignIn(
      Provider.google,
      req.user.profileId,
      req.user.username,
      req.user.email,
    );
    res.redirect(`${process.env.GOOGLE_FRONT_URL}?token=${response.access_token}`);
  }

  @UseGuards(AuthGuard('github'))
  @Get('github')
  githubAuth() {}

  @UseGuards(AuthGuard('github'))
  @Get('github/callback')
  async githubRedirect(@Req() req: GitHubRequest, @Res() res: Response) {
    const response = await this.authService.OAuthSignIn(
      Provider.github,
      req.user.profileId,
      req.user.username,
      req.user.email,
    );
    res.redirect(`${process.env.GITHUB_FRONT_URL}?token=${response.access_token}`);
  }
}

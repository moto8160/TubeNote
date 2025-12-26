import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignInResponse } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: SignInDto): Promise<SignInResponse> {
    return this.authService.signIn(dto);
  }
}

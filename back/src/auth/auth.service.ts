import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './auth.dto';
import { SignInResponse } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // パスワードを検証してOKなら、アクセストークンを作成して返す
  async signIn(dto: SignInDto): Promise<SignInResponse> {
    const user = await this.usersService.findUserByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('メールアドレスが登録されていません');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password!);

    if (!isMatch) {
      throw new UnauthorizedException('パスワードが正しくありません');
    }

    // ペイロード(+サブジェクト)の設定
    const payload = { sub: user.id, email: user.email, username: user.name };

    // 入力に応じて有効期限を設定
    const expiresIn = dto.remember ? '30d' : '24h';

    return {
      access_token: await this.jwtService.signAsync(payload, { expiresIn }),
    };
  }

  async googleSignIn(profileId: string, username: string, email: string) {
    let user = await this.usersService.findUserByEmail(email);

    //初回ログイン時はユーザー登録
    if (!user) {
      user = await this.usersService.createGoogleUser(profileId, username, email);
    }

    const payload = { sub: user.id, email: user.email, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

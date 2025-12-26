import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtPayload, RequestUser } from './auth.type';

// ログイン後の全リクエストで、JWT検証をここで自動で行う。
// 認証後はreq.userを設定し、AuthGuardはこれの存在を見る。

@Injectable()
// JWT検証を継承元で行う
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // パラメータ設定
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  // 認証後はpayloadを受け取り、req.userに設定する
  validate(payload: JwtPayload): RequestUser {
    return { userId: payload.sub, email: payload.email, username: payload.username };
  }
}

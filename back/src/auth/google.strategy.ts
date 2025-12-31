import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { GoogleUser } from './auth.type';

// npm公式ドキュメント（https://www.npmjs.com/package/passport-google-oauth20）

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    //パラメータ設定
    super({
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      scope: ['profile', 'email'], //必要な情報
    });
  }

  //認証OK時に"req.user"を設定
  //cb(callback)はNestJS-PassportStrategyでは不要
  validate(accessToken: string, refreshToken: string, profile: Profile): GoogleUser {
    return {
      profileId: profile.id,
      username: profile.displayName,
      email: profile.emails![0].value,
    };
  }
}

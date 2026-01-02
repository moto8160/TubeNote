import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';
import { GitHubUser } from './auth.type';

// passport-github2（https://www.npmjs.com/package/passport-github2?activeTab=readme）

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: process.env.GITHUB_CALLBACK_URL!,
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile): GitHubUser {
    return {
      profileId: profile.id,
      username: profile.username ?? null,
      email: profile.emails?.[0]?.value ?? null,
    };
  }
}

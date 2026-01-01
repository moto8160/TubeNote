import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))でもよいけど拡張目的で作成される
// @UseGuards(JwtAuthGuard)のデコレータが使える
// これで認証が必要かを判別する

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

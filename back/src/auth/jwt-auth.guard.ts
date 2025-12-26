import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(JwtAuthGuard)のデコレータを使用可能にする
// これで認証が必要かを判別する

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

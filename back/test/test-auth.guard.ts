import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class TestJwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // 認証済みユーザーを注入
    request.user = {
      userId: 1,
      email: 'test@example.com',
    };

    return true; // 常に通す
  }
}

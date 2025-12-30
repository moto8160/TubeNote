import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { AuthModule } from './auth/auth.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [PrismaModule, PostsModule, UsersModule, VideosModule, AuthModule, LikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

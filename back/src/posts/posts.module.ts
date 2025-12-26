import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaModule } from 'src/prisma.module';
import { VideosModule } from 'src/videos/videos.module';

@Module({
  imports: [PrismaModule, VideosModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

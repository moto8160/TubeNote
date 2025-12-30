import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(postId: number, userId: number) {
    await this.prisma.like.create({
      data: { postId, userId },
    });
  }

  async delete(postId: number, userId: number) {
    await this.prisma.like.delete({
      where: { postId_userId: { postId, userId } }, //複合主キー
    });
  }
}

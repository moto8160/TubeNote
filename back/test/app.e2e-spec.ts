import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

describe('posts E2E', () => {
  let app: INestApplication<App>;
  let accessToken: string;
  let postId: number;

  // テスト開始前に1回実行
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // テストユーザーの準備
    const prisma = app.get(PrismaService);

    await prisma.user.deleteMany({
      where: { email: 'testuser@example.com' },
    });

    await prisma.user.create({
      data: {
        name: 'test user',
        email: 'testuser@example.com',
        password: await bcrypt.hash('password', 10),
      },
    });

    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password',
        remember: false,
      })
      .expect(201);

    const body = res.body as { access_token: string };
    accessToken = body.access_token;
  });

  it('未認証の時、401', async () => {
    await request(app.getHttpServer()).get('/posts').expect(401); //Unauthorized
  });

  it('post作成', async () => {
    const res = await request(app.getHttpServer())
      .post('/posts')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        videoUrl: 'https://www.youtube.com/watch?v=TRcquLFgiWU',
        text: 'test',
        status: 'public',
      })
      .expect(201); //Created

    const body = res.body as { postId: number };
    postId = body.postId;
  });

  it('一覧取得', async () => {
    await request(app.getHttpServer())
      .get('/posts')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200); //OK
  });

  it('詳細取得', async () => {
    const res = await request(app.getHttpServer()).get(`/posts/${postId}`).expect(200);

    const body = res.body as { id: number };
    expect(body.id).toBe(postId);
  });

  it('post更新', async () => {
    const res = await request(app.getHttpServer())
      .put(`/posts/${postId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        text: 'test updated',
        status: 'private',
      })
      .expect(200);

    const body = res.body as { success: boolean };
    expect(body.success).toBe(true);
  });

  it('post削除', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/posts/${postId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    const body = res.body as { success: boolean; videoDeleted: boolean };
    expect(body.success).toBe(true);
    expect(body.videoDeleted).toBe(true);
  });
});

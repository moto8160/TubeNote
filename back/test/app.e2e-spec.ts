import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('posts E2E', () => {
  let app: INestApplication<App>;
  let accessToken: string;

  // テスト開始前に1回実行
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // テスト用ユーザーでログイン
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'testuser',
        remember: false,
      })
      .expect(201);
    accessToken = loginRes.body.access_token;
  });

  it('未認証の時、401', async () => {
    await request(app.getHttpServer()).get('/posts').expect(401); //Unauthorized
  });

  it('post作成', async () => {
    await request(app.getHttpServer())
      .post('/posts')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        videoUrl: 'https://www.youtube.com/watch?v=esa7AFGWNeU',
        text: 'test',
      })
      .expect(201); //Created
  });

  it('一覧取得', async () => {
    const res = await request(app.getHttpServer())
      .get('/posts')
      .set('Authorization', `Bearer ${accessToken}`);

    console.log(res.body);
  });
});

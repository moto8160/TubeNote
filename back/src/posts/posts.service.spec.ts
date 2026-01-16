import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { VideosService } from 'src/videos/videos.service';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PostStatus } from '@prisma/client';

describe('PostsService', () => {
  let service: PostsService;

  const prismaMock = {
    post: {
      findMany: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const videosServiceMock = {
    findOrCreateByUrl: jest.fn(),
    delete: jest.fn(),
  };

  const POST_ID = 1;
  const NO_EXIST_POST_ID = 2;
  const USER_ID = 10;
  const OTHER_USER_ID = 20;
  const VIDEO_ID = 100;

  beforeEach(async () => {
    // テスト用のモジュールを作成
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        { provide: PrismaService, useValue: prismaMock },
        { provide: VideosService, useValue: videosServiceMock },
      ],
    }).compile();

    // テスト用モジュールからポストサービスのインスタンスを取得
    service = module.get<PostsService>(PostsService);
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    const posts = [
      { text: 'text-1', status: 'public', userId: USER_ID, likes: [{ userId: USER_ID }] },
      { text: 'text-2', status: 'public', userId: OTHER_USER_ID, likes: [] },
      { text: 'text-3', status: 'private', userId: USER_ID, likes: [{ userId: USER_ID }] },
      { text: 'text-4', status: 'private', userId: OTHER_USER_ID, likes: [] },
    ];

    it('isLikedが正しく判定される', async () => {
      prismaMock.post.findMany.mockResolvedValue(posts); // findMany結果をモックする

      const result = await service.findAll(USER_ID);
      expect(result[0].isLiked).toBe(true);
      expect(result[1].isLiked).toBe(false);
    });

    it('ノートが正しく表示される', async () => {
      prismaMock.post.findMany.mockResolvedValue(posts);
      const PRIVATE_TEXT = '🔒 このノートは非公開です。';

      const result = await service.findAll(USER_ID);
      expect(result[0].text).toBe('text-1');
      expect(result[1].text).toBe('text-2');
      expect(result[2].text).toBe('text-3');
      expect(result[3].text).toBe(PRIVATE_TEXT);
    });
  });

  // ロジックないから不要でも
  describe('findOne', () => {
    const post = { id: POST_ID };

    it('postが存在する時、postを返す', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      const result = await service.findOne(POST_ID);
      expect(result).toBe(post);
    });

    it('postが存在しない時、例外', async () => {
      prismaMock.post.findUniqueOrThrow.mockRejectedValue(new Error());

      await expect(service.findOne(NO_EXIST_POST_ID)).rejects.toThrow(); // Promiseがrejectされて、その理由が例外
    });
  });

  describe('create', () => {
    const video = { id: VIDEO_ID };
    const dto = { videoUrl: 'http://example.com', text: 'Create text', status: PostStatus.public };

    it('videoIdの取得とpost作成', async () => {
      videosServiceMock.findOrCreateByUrl.mockResolvedValue(video); //videoを返させる
      prismaMock.post.create.mockResolvedValue({}); //空オブジェクトを返させる

      await service.create(USER_ID, dto); // 各メソッドが正しい引数で呼ばれていることを確認
      expect(videosServiceMock.findOrCreateByUrl).toHaveBeenCalledWith(dto.videoUrl);
      expect(prismaMock.post.create).toHaveBeenCalledWith({
        data: { userId: USER_ID, videoId: video.id, text: dto.text, status: dto.status },
      });
    });
  });

  describe('update', () => {
    const dto = { text: 'Updated text', status: PostStatus.private };

    it('自分の投稿の時、post更新', async () => {
      const checkOwnPostSpy = jest.spyOn(service, 'checkOwnPost').mockResolvedValue({} as any); // 自分の投稿とする
      prismaMock.post.update.mockResolvedValue({});

      await service.update(POST_ID, dto, USER_ID);
      expect(checkOwnPostSpy).toHaveBeenCalledWith(POST_ID, USER_ID);
      expect(prismaMock.post.update).toHaveBeenCalledWith({
        where: { id: POST_ID },
        data: { text: dto.text, status: dto.status },
      });
    });

    it('他人の投稿の時、post更新しない', async () => {
      jest.spyOn(service, 'checkOwnPost').mockRejectedValue(new Error()); //例外を返させる

      await expect(service.update(POST_ID, dto, OTHER_USER_ID)).rejects.toThrow();
      expect(prismaMock.post.update).not.toHaveBeenCalled(); // updateは実行されない
    });
  });

  describe('delete', () => {
    const post = { id: POST_ID, videoId: VIDEO_ID };
    it('0件postになる時、video削除', async () => {
      jest.spyOn(service, 'checkOwnPost').mockResolvedValue(post as any);
      jest.spyOn(service, 'countPostByVideoId').mockResolvedValue(0);
      prismaMock.post.delete.mockResolvedValue({});
      videosServiceMock.delete.mockResolvedValue({});

      const result = await service.delete(POST_ID, USER_ID);
      expect(prismaMock.post.delete).toHaveBeenCalledWith({ where: { id: POST_ID } });
      expect(videosServiceMock.delete).toHaveBeenCalledWith(post.videoId);
      expect(result.videoDeleted).toEqual(true);
    });

    it('0件postにならない時、video削除しない', async () => {
      jest.spyOn(service, 'checkOwnPost').mockResolvedValue(post as any);
      jest.spyOn(service, 'countPostByVideoId').mockResolvedValue(1);
      prismaMock.post.delete.mockResolvedValue({});
      videosServiceMock.delete.mockResolvedValue({});

      const result = await service.delete(POST_ID, USER_ID);
      expect(prismaMock.post.delete).toHaveBeenCalledWith({ where: { id: POST_ID } });
      expect(videosServiceMock.delete).not.toHaveBeenCalled();
      expect(result.videoDeleted).toEqual(false);
    });
  });

  describe('checkOwnPost', () => {
    const post = { id: 1, userId: 10 };

    it('自分の投稿の時、postを返す', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      const result = await service.checkOwnPost(POST_ID, USER_ID);
      expect(result).toBe(post);
    });

    it('他人の投稿の時、例外', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      await expect(service.checkOwnPost(POST_ID, OTHER_USER_ID)).rejects.toBeInstanceOf(
        ForbiddenException,
      );
    });
  });
});

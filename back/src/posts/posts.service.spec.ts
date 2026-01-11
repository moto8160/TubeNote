import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { VideosService } from 'src/videos/videos.service';
import { PrismaService } from 'src/prisma.service';
import { ForbiddenException } from '@nestjs/common';
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

  const postId = 1;
  const userId = 10;
  const otherUserId = 20;

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
    const posts = [{ likes: [{ userId: 10 }] }, { likes: [] }];

    it('isLikedが正しく判定される', async () => {
      prismaMock.post.findMany.mockResolvedValue(posts); // findMany結果をモックする

      const result = await service.findAll(userId);

      expect(result[0].isLiked).toBe(true);
      expect(result[1].isLiked).toBe(false);
    });
  });

  // ロジックないから不要でも
  describe('findOne', () => {
    const post = { id: 1, video: {} };

    it('postが存在する時、postを返す', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      const result = await service.findOne(postId);

      expect(result).toBe(post);
    });

    it('postが存在しない時、例外', async () => {
      prismaMock.post.findUniqueOrThrow.mockRejectedValue(new Error());

      await expect(service.findOne(2)).rejects.toThrow(); // Promiseがrejectされて、その理由が例外
    });
  });

  describe('create', () => {
    const video = { id: 100 };
    const dto = { videoUrl: 'http://example.com', text: 'Create text' };

    it('videoIdの取得とpost作成', async () => {
      videosServiceMock.findOrCreateByUrl.mockResolvedValue(video); //videoを返させる
      prismaMock.post.create.mockResolvedValue({}); //空オブジェクトを返させる

      await service.create(userId, dto);

      // 各メソッドが正しい引数で呼ばれていること
      expect(videosServiceMock.findOrCreateByUrl).toHaveBeenCalledWith(dto.videoUrl);
      expect(prismaMock.post.create).toHaveBeenCalledWith({
        data: { userId, videoId: video.id, text: dto.text },
      });
    });
  });

  describe('update', () => {
    const dto = { text: 'Updated text' };

    it('自分の投稿の時、post更新', async () => {
      const checkOwnPostSpy = jest.spyOn(service, 'checkOwnPost').mockResolvedValue({} as any); // 自分の投稿とする
      prismaMock.post.update.mockResolvedValue({});

      await service.update(postId, dto, userId);

      expect(checkOwnPostSpy).toHaveBeenCalledWith(postId, userId);
      expect(prismaMock.post.update).toHaveBeenCalledWith({
        where: { id: postId },
        data: { text: dto.text },
      });
    });

    it('他人の投稿の時、post更新しない', async () => {
      jest.spyOn(service, 'checkOwnPost').mockRejectedValue(new Error()); //例外を返させる

      await expect(service.update(postId, dto, otherUserId)).rejects.toThrow();

      expect(prismaMock.post.update).not.toHaveBeenCalled(); // updateは実行されない
    });
  });

  describe('delete', () => {
    const post = { id: postId, videoId: 100 };

    it('1件の投稿の時、video削除', async () => {
      jest.spyOn(service, 'checkOwnPost').mockResolvedValue(post as any);
      prismaMock.post.delete.mockResolvedValue({});
      jest.spyOn(service, 'countPostByVideoId').mockResolvedValue(0);
      videosServiceMock.delete.mockResolvedValue({});

      const result = await service.delete(postId, userId);

      expect(prismaMock.post.delete).toHaveBeenCalledWith({ where: { id: postId } });
      expect(videosServiceMock.delete).toHaveBeenCalledWith(post.videoId);
      expect(result.videoDeleted).toEqual(true);
    });

    it('1件の投稿でない時、video削除しない', async () => {
      jest.spyOn(service, 'checkOwnPost').mockResolvedValue(post as any);
      prismaMock.post.delete.mockResolvedValue({});
      jest.spyOn(service, 'countPostByVideoId').mockResolvedValue(1);

      const result = await service.delete(postId, userId);

      expect(prismaMock.post.delete).toHaveBeenCalledWith({ where: { id: postId } });
      expect(videosServiceMock.delete).not.toHaveBeenCalled();
      expect(result.videoDeleted).toEqual(false);
    });
  });

  describe('checkOwnPost', () => {
    const post = { id: 1, userId: 10 };

    it('自分の投稿の時、postを返す', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      const result = await service.checkOwnPost(postId, userId);

      expect(result).toBe(post);
    });

    it('他人の投稿の時、例外', async () => {
      prismaMock.post.findUniqueOrThrow.mockResolvedValue(post);

      await expect(service.checkOwnPost(postId, otherUserId)).rejects.toBeInstanceOf(
        ForbiddenException,
      );
    });
  });
});

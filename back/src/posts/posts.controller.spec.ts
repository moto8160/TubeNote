import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let postsService: jest.Mocked<PostsService>;

  const POST_ID = 1;
  const USER_ID = 10;
  const req = { user: { userId: USER_ID } };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    postsService = module.get(PostsService);
  });

  it('findAll', async () => {
    const posts = [];
    const spy = jest.spyOn(postsService, 'findAll').mockResolvedValue(posts);

    const result = await controller.findAll(req as any);

    expect(spy).toHaveBeenCalledWith(USER_ID);
    expect(result).toBe(posts);
  });

  it('findOne', async () => {
    const post = { id: POST_ID };
    const spy = jest.spyOn(postsService, 'findOne').mockResolvedValue(post as any);

    const result = await controller.findOne(POST_ID);

    expect(spy).toHaveBeenCalledWith(POST_ID);
    expect(result).toBe(post);
  });

  it('create', async () => {
    const dto = { videoUrl: 'url', text: 'text' };
    const spy = jest.spyOn(postsService, 'create').mockResolvedValue({} as any);

    const result = await controller.create(dto, req as any);

    expect(spy).toHaveBeenCalledWith(USER_ID, dto);
    expect(result).toEqual({ success: true });
  });

  it('update', async () => {
    const post = { id: POST_ID };
    const dto = { text: 'text' };
    const spy = jest.spyOn(postsService, 'update').mockResolvedValue(undefined);

    const result = await controller.update(post.id, dto, req as any);

    expect(spy).toHaveBeenCalledWith(POST_ID, dto, USER_ID);
    expect(result).toEqual({ success: true });
  });

  it('delete', async () => {
    const post = { id: POST_ID };
    const spy = jest.spyOn(postsService, 'delete').mockResolvedValue({ videoDeleted: true });

    const result = await controller.delete(post.id, req as any);

    expect(spy).toHaveBeenCalledWith(POST_ID, USER_ID);
    expect(result).toEqual({ success: true, videoDeleted: true });
  });
});

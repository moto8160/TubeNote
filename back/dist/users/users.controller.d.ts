import { UsersService } from './users.service';
import { CreateUserDto, MyPageResponse, MyPostsResponse, SuccessResponse } from './user.dto';
import type { JwtRequest } from 'src/auth/auth.type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyPosts(req: JwtRequest): Promise<MyPostsResponse>;
    getMyPage(req: JwtRequest): Promise<MyPageResponse>;
    createUser(dto: CreateUserDto): Promise<SuccessResponse>;
}

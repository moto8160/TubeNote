import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, MyPageResponse, MyPostsResponse } from './user.dto';
import { User } from '@prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getMyPosts(userId: number): Promise<MyPostsResponse>;
    getMayPage(userId: number): Promise<MyPageResponse>;
    findUserByEmail(email: string): Promise<User | null>;
    createUser(dto: CreateUserDto): Promise<void>;
}

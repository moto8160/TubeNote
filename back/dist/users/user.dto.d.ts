import { Prisma } from '@prisma/client';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}
export declare class SuccessResponse {
    success: true;
}
export type MyPostsResponse = Prisma.UserGetPayload<{
    select: {
        id: true;
        name: true;
        createdAt: true;
        _count: {
            select: {
                posts: true;
            };
        };
        posts: {
            include: {
                user: {
                    select: {
                        id: true;
                        name: true;
                    };
                };
                video: true;
            };
        };
    };
}>;
export type MyPageResponse = {
    user: {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    };
    postCount: number;
    videoCount: number;
};

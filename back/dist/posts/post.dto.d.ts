import { Prisma } from '@prisma/client';
export declare class CreatePostDto {
    videoUrl: string;
    text: string;
}
export type PostListResponse = Prisma.PostGetPayload<{
    include: {
        user: {
            select: {
                id: true;
                name: true;
            };
        };
        video: true;
    };
}>;
export declare class SuccessResponse {
    success: true;
}

import { Prisma } from '@prisma/client';
export type VideoListResponse = Prisma.VideoGetPayload<{
    include: {
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
            };
        };
    };
}>;
export type VideoDetailResponse = Prisma.VideoGetPayload<{
    include: {
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
            };
        };
    };
}>;
export declare class YoutubeOEmbedResponse {
    html: string;
    title: string;
    author_name: string;
    author_url: string;
    thumbnail_url: string;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let VideosService = class VideosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.video.findMany({
            include: {
                _count: { select: { posts: true } },
                posts: {
                    take: 1,
                    include: {
                        user: { select: { id: true, name: true } },
                    },
                    orderBy: { updatedAt: 'desc' },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async findOne(videoId) {
        const video = await this.prisma.video.findUnique({
            where: { id: videoId },
            include: {
                _count: { select: { posts: true } },
                posts: {
                    include: {
                        user: { select: { id: true, name: true } },
                    },
                    orderBy: { updatedAt: 'desc' },
                },
            },
        });
        if (!video) {
            throw new common_1.NotFoundException('video not found');
        }
        return video;
    }
    async findOrCreateByUrl(videoUrl) {
        const video = await this.prisma.video.findUnique({
            where: { videoUrl },
        });
        if (video)
            return video;
        const videoData = await this.fetchOEmbed(videoUrl);
        const embedUrl = videoData.html.match(/src="([^"]+)"/)[1];
        const { title, author_name, author_url, thumbnail_url } = videoData;
        return this.prisma.video.create({
            data: {
                videoUrl,
                embedUrl,
                title,
                authorName: author_name,
                authorUrl: author_url,
                thumbnailUrl: thumbnail_url,
            },
        });
    }
    async fetchOEmbed(videoUrl) {
        let url;
        try {
            url = new URL(videoUrl);
        }
        catch {
            throw new common_1.BadRequestException('URLの形式が正しくありません');
        }
        const fetchUrl = `https://www.youtube.com/oembed?url=${url}&format=json`;
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            throw new common_1.BadRequestException('動画が存在しません');
        }
        return (await res.json());
    }
};
exports.VideosService = VideosService;
exports.VideosService = VideosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VideosService);
//# sourceMappingURL=videos.service.js.map
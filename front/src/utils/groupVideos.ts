import { MyPostsResponse } from '@/features/users/user.type';
import { VideoListResponse } from '@/features/videos/video.type';

// IN-posts[].video
// OT-video.posts[]

export default function groupVideos(user: MyPostsResponse): VideoListResponse[] {
  const result: VideoListResponse[] = [];

  for (const post of user.posts) {
    const video = post.video;

    // OT-video.idが格納済みか
    let videoGroup = result.find((videoItem) => videoItem.id === video.id);

    // video格納
    if (!videoGroup) {
      videoGroup = {
        ...video,
        _count: { posts: 0 },
        posts: [],
      };
      result.push(videoGroup);
    }

    // post格納
    videoGroup.posts.push({
      ...post,
      user: {
        id: user.id,
        name: user.name,
      },
    });

    // videoごとのpostカウント
    videoGroup._count.posts++;
  }

  return result;
}

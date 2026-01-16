import { PostStatus } from '@prisma/client';

export function EditPrivatePost(
  postStatus: PostStatus,
  postText: string,
  postUserId: number,
  currentUserId: number,
): string {
  const isPrivate = postStatus === PostStatus.private;
  const isOwner = postUserId === currentUserId;

  if (isPrivate && !isOwner) {
    return '🔒 このノートは非公開です。';
  }

  return postText;
}

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('public', 'private');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "PostStatus" NOT NULL DEFAULT 'private';

-- DropForeignKey
ALTER TABLE "Upvotes" DROP CONSTRAINT "Upvotes_postId_fkey";

-- AddForeignKey
ALTER TABLE "Upvotes" ADD CONSTRAINT "Upvotes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

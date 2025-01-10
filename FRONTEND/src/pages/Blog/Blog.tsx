import { useBlog } from "../../hooks/blog";
import { Header } from "../../components/Blog/SingleBlog/Header";
import { PostCard } from "../../components/Blog/SingleBlog/PostCard";
import { SingleSkeletonBlogCard } from "../../components/ui/SkeletonBlogCard";

export const Blog = () => {
  const { blog } = useBlog();
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {blog ? <PostCard blog={blog} /> : <SingleSkeletonBlogCard />}
    </div>
  );
};

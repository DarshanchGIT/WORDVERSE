import { useBlog } from "../../hooks/blog";
import { Header } from "../../components/Blog/SingleBlog/Header";
import { PostCard } from "../../components/Blog/SingleBlog/PostCard";
import { SingleSkeletonBlogCard } from "../../components/ui/SkeletonBlogCard";
import background from "../../assets/background.jpg";

export const Blog = () => {
  const { blog } = useBlog();
  return (
    <div
      className="min-h-screen relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 z-0"></div>
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      {/* Main content */}
      <main className="relative z-10 pt-16 pb-15 px-4 overflow-y-auto max-h-screen">
        <div className="max-w-4xl mx-auto">
          {blog ? <PostCard blog={blog} /> : <SingleSkeletonBlogCard />}
        </div>
      </main>
    </div>
  );
};

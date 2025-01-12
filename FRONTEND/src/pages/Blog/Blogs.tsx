import { BlogCard } from "../../components/Blog/BlogCard";
import { Header } from "../../components/Blog/Header";
import { SkeletonBlogCard } from "../../components/ui/SkeletonBlogCard";
import { useBlogs } from "../../hooks/blog";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main content */}
      <main className="pt-24 pb-15 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
          <div className="space-y-6">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonBlogCard key={index} />
                ))
              : blogs.map((blog, index) => <BlogCard key={index} {...blog} />)}
          </div>
        </div>
      </main>
    </div>
  );
};

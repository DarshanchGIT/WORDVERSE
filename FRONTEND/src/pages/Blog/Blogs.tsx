import { BlogCard } from "../../components/Blog/BlogCard";
import { Header } from "../../components/Blog/Header";
import { SkeletonBlogCard } from "../../components/ui/SkeletonBlogCard";
import { useBlogs } from "../../hooks/blog";
import background from "../../assets/background.jpg";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
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
      <main className="relative z-10 pt-32 pb-15 px-4 overflow-y-auto max-h-screen">
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

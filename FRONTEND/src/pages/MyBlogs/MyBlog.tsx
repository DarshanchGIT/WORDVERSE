import { Header } from "../../components/Blog/Header";
import { MyBlogCard } from "../../components/Blog/MyBlogs/MyBlogCard";
import { useUser } from "../../hooks/user";
import partyPopper from "../../assets/partyPopper.gif";

interface Blog {
  id: string;
  title: string;
  content: string;
}

export const MyBlogs = () => {
  const { myblogs, loading, currentUser } = useUser();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main content */}
      <main className="pt-28 pb-10">
        {" "}
        <div className="max-w-5xl mx-auto">
          <div className="text-3xl font-bold mb-8 flex justify-center items-center space-x-2">
            {loading ? (
              <div className="h-24 w-[600px] bg-gray-700 rounded-full mt-6 animate-pulse"></div>
            ) : (
              <span className="bg-white/10 backdrop-blur-lg rounded-full shadow-lg p-6 flex items-center justify-center space-x-2">
                <span className="text-indigo-400 text-5xl">
                  {currentUser?.name}
                </span>
                <img
                  src={partyPopper}
                  alt="Party Popper"
                  className="w-20 h-20 mx-2"
                />
                <span>blogs</span>
              </span>
            )}
          </div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 animate-pulse h-full rounded-lg"
                  >
                    <div className="h-6 bg-gray-700 rounded-full mb-2"></div>{" "}
                    <div className="h-44 bg-gray-700 rounded-lg"></div>{" "}
                  </div>
                ))
              : myblogs.map((blog: Blog) => (
                  <MyBlogCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                  />
                ))}
          </div>
        </div>
      </main>
    </div>
  );
};

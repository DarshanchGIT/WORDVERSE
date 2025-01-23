import { Bookmark } from "lucide-react";
import { MyBlogHeader } from "../../components/Blog/MyBlogs/MyBlogHeader";
import background from "../../assets/background.jpg";
import { useUser } from "../../hooks/user";
import { SkeletonMyBlogCard } from "../../components/ui/SkeletonBlogCard";
import { UserCard } from "../../components/Blog/MyBlogs/UserCard";
import { MyBlogCard } from "../../components/Blog/MyBlogs/MyBlogCard";
import { SpotlightCard } from "../../components/ui/SpotlightCard";
interface Blog {
  id: string;
  title: string;
  content: string;
}

export const MyBlogs = () => {
  const { myblogs, loading, currentUser } = useUser();

  return (
    <div
      className="min-h-screen relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-0"></div>

      {/* Header */}
      <div className="sticky top-0 z-20">
        <MyBlogHeader />
      </div>

      <div className="relative z-10 pt-32 pb-15 px-4 overflow-y-auto max-h-screen">
        <div className="max-w-screen-lg mx-auto">
          {/* User Profile Section */}
          <UserCard
            name={currentUser?.name}
            email={currentUser?.email}
            loading={loading}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blogs Section */}
            <div className="lg:col-span-2 space-y-6 pb-6">
              <SpotlightCard
                className="custom-spotlight-card mb-4 flex items-center justify-center h-4 w-44 border-2"
                spotlightColor="rgba(0, 0, 139, 0.3)"
              >
                <h2 className="text-2xl font-semibold text-center">My Blogs</h2>
              </SpotlightCard>

              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonMyBlogCard key={index} />
                  ))
                : myblogs.map((blog: Blog) => (
                    <MyBlogCard
                      id={blog.id}
                      title={blog.title}
                      content={blog.content}
                    />
                  ))}

              {!loading && myblogs.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  You haven't created any blogs yet.
                </div>
              )}
            </div>

            {/* Bookmarks Section */}
            {/* <div className="space-y-6">
              <SpotlightCard
                className="custom-spotlight-card mb-4 flex items-center justify-center h-4 w-68 border-2"
                spotlightColor="rgba(0, 0, 139, 0.3)"
              >
                <h2 className="text-2xl font-semibold text-center pr-3">
                  My Bookmarks
                </h2>{" "}
                <Bookmark className="h-5 w-5" />
              </SpotlightCard>

              {mockUser.bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="bg-gray-800 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-semibold">
                        {bookmark.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        by {bookmark.author}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Saved on{" "}
                        {new Date(bookmark.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => alert("working on this")}
                      className="p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {mockUser.bookmarks.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  No bookmarks yet.
                </div>
              )}
            </div> */}
            {/* Bookmarks Section */}
            <div className="space-y-6">
              <SpotlightCard
                className="custom-spotlight-card mb-4 flex items-center justify-center h-4 w-68 border-2"
                spotlightColor="rgba(0, 0, 139, 0.3)"
              >
                <h2 className="text-2xl font-semibold text-center pr-3">
                  My Bookmarks
                </h2>{" "}
                <Bookmark className="h-5 w-5" />
              </SpotlightCard>

              <div className="text-center py-8 text-gray-400 italic bg-gray-800 rounded-lg ">
                This feature is still in progress...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

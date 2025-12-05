export const SkeletonBlogCard = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-md animate-pulse">
      <div className="skeleton-blur">
        <div className="h-48 bg-gray-200 rounded-md dark:bg-gray-700"></div>
      </div>
      <div className="mt-4 skeleton-blur space-y-2">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5"></div>
      </div>
    </div>
  );
};

export const SingleSkeletonBlogCard = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 pt-24 pb-12 animate-pulse">
      {/* Author info and metadata */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="bg-gray-200 w-12 h-12 rounded-full dark:bg-gray-700"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
        </div>
      </div>

      {/* Title */}
      <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-4/5 mb-6"></div>

      {/* Cover image */}
      <div className="h-[400px] bg-gray-200 rounded-xl dark:bg-gray-700 mb-8"></div>

      {/* Content */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div>
      </div>

      {/* Author bio */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5"></div>
        </div>
      </div>
    </article>
  );
};

export const SkeletonMyBlogCard = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-md animate-pulse">
      <div className="skeleton-blur">
        <div className="h-48 bg-gray-200 rounded-md dark:bg-gray-700"></div>
      </div>
      <div className="mt-4 skeleton-blur space-y-2">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5"></div>
      </div>
    </div>
  );
};

export const SkeletonUserCard = () => {
  return (
    <div className="p-8 bg-gray-800 rounded-3xl shadow-lg animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-600 rounded-full w-12 h-12"></div>
        <div>
          <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
        </div>
      </div>
    </div>
  );
};
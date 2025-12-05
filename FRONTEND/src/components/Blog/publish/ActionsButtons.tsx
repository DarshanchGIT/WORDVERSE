import { BlogCreationInput } from "@darshanpm/wordverse";
import { PublishBlog } from "../../../services/BlogServices";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export const ActionsButtons = ({ title, content }: BlogCreationInput) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handlePublish = async () => {
    if (!title || !content) {
      console.log("Title and content are required.");
      return;
    }

    setIsLoading(true);
    try {
      const blog = await PublishBlog({ title, content });
      navigate(`/blog?id=${blog.id}`);
      console.log("Blog published successfully!", blog);
    } catch (err) {
      console.error("Error publishing blog:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-end space-x-4 mt-3">
      <button
        onClick={handlePublish}
        type="submit"
        className="w-40 flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-medium font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10 relative"
        disabled={isLoading}
      >
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="40"
            width="40"
            color="white"
            radius="4"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            wrapperClass=""
          />
        ) : (
          "Publish"
        )}
      </button>
    </div>
  );
};

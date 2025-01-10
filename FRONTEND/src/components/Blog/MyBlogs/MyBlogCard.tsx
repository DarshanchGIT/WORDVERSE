import DOMPurify from "dompurify";
import { Button } from "../../ui/button";
import { ArrowRight, Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DeleteBlog } from "../../../services/BlogServices";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
}

export const MyBlogCard = ({ id, title, content }: BlogCardProps) => {
  const navigate = useNavigate();
  const sanitizedContent = DOMPurify.sanitize(content);

  const onDelete = async (id: string) => {
    await DeleteBlog(id);
    console.log(`Blog with ID: ${id} has been deleted`);
  };

  const onUpdate = (id: string) => {
    console.log(`Update blog with ID: ${id}`);
  };

  return (
    <div className="bg-gray-900 w-full h-[350px] rounded-lg p-4 hover:bg-gray-800/70 transition-colors flex flex-col justify-between border-4 border-white/10">
      {/* Blog Title */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
          {title}
        </h2>

        {/* Blog Content */}
        <div className="bg-gray-700/50 p-4 rounded flex-1 overflow-hidden">
          <p
            className="text-gray-300 text-sm line-clamp-4"
            dangerouslySetInnerHTML={{
              __html: sanitizedContent,
            }}
          ></p>
        </div>

        {/* Read more link */}
        <div
          className="text-indigo-400 hover:underline flex items-center mt-2 cursor-pointer"
          onClick={() => navigate(`/blog?id=${id}`)}
        >
          Read More <ArrowRight className="ml-1" size={18} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4 pb-1">
        <Button
          variant="outline"
          className="text-white bg-gray-900 rounded-full transition duration-300 flex items-center"
          onClick={() => onUpdate(id)}
        >
          <Edit className="mr-2" size={16} />
          Update
        </Button>
        <Button
          variant="destructive"
          className="rounded-full transition duration-300 bg-red-800 flex items-center"
          onClick={() => onDelete(id)}
        >
          <Trash className="mr-2" size={16} />
          Delete
        </Button>
      </div>
    </div>
  );
};

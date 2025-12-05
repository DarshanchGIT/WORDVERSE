import { Pencil, Trash2, ArrowRight } from "lucide-react";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { DeleteBlog } from "../../../services/BlogServices";
import { useState } from "react";
import { Spinner } from "../../ui/Spinner";

interface BlogProps {
  id: string;
  title: string;
  content: string;
}

export const MyBlogCard = ({ id, title, content }: BlogProps) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = async (id: string) => {
    setIsDeleting(true);
    await DeleteBlog(id);
    setIsDeleting(false);
    window.location.reload();
  };

  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      key={id}
      className="bg-gray-900 rounded-lg p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex space-x-3">
          {/* Update Blog Button */}
          <button
            disabled
            className="flex items-center space-x-1 text-gray-500 rounded-full p-3 transition-colors cursor-not-allowed"
            title="This feature is under development"
          >
            <Pencil className="w-5 h-5" />
          </button>
          {/* Delete Blog Button */}
          <button
            onClick={() => onDelete(id)}
            className="flex items-center space-x-1 hover:text-red-400 text-white rounded-full p-3 transition-colors hover:bg-gray-700"
            disabled={isDeleting}
            title="Delete"
          >
            {isDeleting ? (
              <Spinner />
            ) : (
              <Trash2 className="w-5 h-5 hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <p
          className="text-gray-400 line-clamp-2 font-normal text-sm"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></p>
        <span
          onClick={() => navigate(`/blog?id=${id}`)}
          className="text-indigo-400 flex items-center mt-2 cursor-pointer hover:text-indigo-600"
        >
          Read full blog <ArrowRight className="ml-1 h-4 w-4" />
        </span>
      </div>
    </div>
  );
};

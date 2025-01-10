import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { backendURL } from "../config/env";

interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
  _count: {
    upvotes: number;
  };
}

interface BlogResponse {
  blogs: Blog[];
}

// Hook to Fetch Multiple Blogs
export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await axios.get<BlogResponse>(
          `${backendURL}/blog/bulk`,
          {
            headers: {
              Authorization: localStorage.getItem("authToken") || "",
            },
          }
        );
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
};

// Hook to Fetch a Single Blog by ID
export const useBlog = () => {
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("id");
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlog = async (): Promise<void> => {
      setLoading(true);
      try {
        if (!blogId) {
          throw new Error("Blog ID is missing.");
        }

        const { data } = await axios.get<{ blog: Blog }>(
          `${backendURL}/blog/${blogId}`,
          {
            headers: {
              Authorization: localStorage.getItem("authToken") || "",
            },
          }
        );
        setBlog(data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  return { blog, loading };
};

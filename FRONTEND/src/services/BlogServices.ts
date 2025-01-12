import axios from "axios";
import { backendURL } from "../config/env";

interface BlogData {
  title: string;
  content: string;
  id?: string;
  authorId?: string;
  published?: boolean;
}

export const PublishBlog = async ({
  title,
  content,
}: BlogData): Promise<BlogData> => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    console.error("Authentication token not found.");
    throw new Error("User is not authenticated.");
  }

  try {
    const response = await axios.post(
      `${backendURL}/blog`,
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.blog;
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
};

export const DeleteBlog = async (id: string): Promise<void> => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    console.error("Authentication token not found.");
    throw new Error("User is not authenticated.");
  }

  try {
    const { data } = await axios.delete(`${backendURL}/blog/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
};

export const HandleVote = async (
  id: string,
  voteType: string
): Promise<void> => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    console.error("Authentication token not found.");
    throw new Error("User is not authenticated.");
  }
  try {
    console.log("voteType: ", voteType);
    const { data } = await axios.post(
      `${backendURL}/blog/${voteType}/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
};

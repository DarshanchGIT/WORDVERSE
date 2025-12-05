import axios from "axios";
import { useEffect, useState } from "react";
import { backendURL } from "../config/env";

interface User {
  id: string;
  email: string;
  name: string;
}

export const useUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [myblogs, setMyblogs] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentUser = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${backendURL}/user/me`, {
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        });
        const { user, post } = data;
        setCurrentUser({ name: user.name, email: user.email, id: user.id });
        setMyblogs(post);
      } catch (error) {
        console.log("Error fetching user details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return { loading, currentUser, myblogs };
};

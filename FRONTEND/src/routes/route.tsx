import { RouteObject } from "react-router-dom";
import { SignUp } from "../pages/auth/SignUp";
import { SignIn } from "../pages/auth/SignIn";
import { LandingPage } from "../pages/Landing/LandingPage";
import { Blog } from "../pages/Blog/Blog";
import { Blogs } from "../pages/Blog/Blogs";
import { Publish } from "../pages/Blog/Publish";
import { MyBlogs } from "../pages/MyBlogs/MyBlog";
import { ProtectedRoute } from "../utils/ProtectedRoute";

export const routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  {
    path: "/blogs",
    element: (
      <ProtectedRoute>
        <Blogs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blog",
    element: (
      <ProtectedRoute>
        <Blog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs/myblogs",
    element: (
      <ProtectedRoute>
        <MyBlogs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blog/publish",
    element: (
      <ProtectedRoute>
        <Publish />
      </ProtectedRoute>
    ),
  },
];

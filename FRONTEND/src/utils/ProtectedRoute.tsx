import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

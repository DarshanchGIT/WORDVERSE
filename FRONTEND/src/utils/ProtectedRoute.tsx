import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  // const token = localStorage.getItem("authToken");
  const isLoggedIn = !!localStorage.getItem("authToken");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/signin?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`}
      />
    );
  }
  return <>{children}</>;
};

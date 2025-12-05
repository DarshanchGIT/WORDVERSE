import { useLocation, useNavigate } from "react-router-dom";

export const useRedirectUrl = (): string => {
  const location = useLocation();
  return new URLSearchParams(location.search).get("redirect") || "/blogs";
};
export const useSignupRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const redirectUrl = new URLSearchParams(location.search).get("redirect");
    navigate(`/signup${redirectUrl ? `?redirect=${redirectUrl}` : ""}`);
  };
};

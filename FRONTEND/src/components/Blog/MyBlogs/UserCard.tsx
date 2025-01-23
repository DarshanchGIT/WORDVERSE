import { Avatar, AvatarFallback } from "../../ui/avatar"; // Adjust import as necessary
import { SkeletonUserCard } from "../../ui/SkeletonBlogCard";
import { SpotlightCard } from "../../ui/SpotlightCard";

interface UserProps {
  name: string | undefined;
  email: string | undefined;
  loading: boolean;
}

const getInitials = (name: string | undefined) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  return initials;
};

export const UserCard = ({ name, email, loading }: UserProps) => {
  return (
    <div>
      {loading ? (
        <SkeletonUserCard />
      ) : (
        <SpotlightCard
          className="custom-spotlight-card mb-8"
          spotlightColor="rgba(0, 0, 139, 0.3)"
        >
          <div className="flex items-center space-x-4">
            <Avatar className="bg-gray-600 w-14 h-14 flex items-center justify-center text-white">
              <AvatarFallback className="text-xl font-bold text-gray-800">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-semibold">{name || "Guest User"}</h1>
              <p className="text-gray-400 font-light text-sm">
                {email || "guest@example.com"}
              </p>
            </div>
          </div>
        </SpotlightCard>
      )}
    </div>
  );
};

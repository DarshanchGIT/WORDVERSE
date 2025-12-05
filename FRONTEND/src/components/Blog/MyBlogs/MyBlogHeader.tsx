import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  Search,
  Pen,
  Plus,
  ChevronDown,
  ChevronUp,
  FileText,
  LogOut,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { useUser } from "../../../hooks/user";
import { Spinner } from "../../ui/Spinner";
import { Logout } from "../../../services/Authservices";

export const MyBlogHeader = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const handleLogout = () => {
    if (Logout()) {
      navigate("/signin");
    }
  };

  const { loading, currentUser } = useUser();

  return (
    <header className="fixed w-full z-10 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-full shadow-lg">
        <div className="flex justify-between h-16 items-center px-6">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/blogs")}
            >
              {" "}
              <ArrowLeft className="h-8 w-8 text-white hover:scale-110 transition-transform mr-2" />
              <Pen className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">
                Wordverse
              </span>
            </div>

            <div className="relative w-40 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-800 rounded-full pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full sm:flex"
              onClick={() => navigate("/blog/publish")}
            >
              <Plus className="h-4 w-4" />
              <span>Create your own blog</span>
            </Button>
            <div className="relative hidden sm:block">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDialog}
              >
                <Avatar className="h-8 w-8">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
                    alt="User avatar"
                    className="object-cover"
                  />
                </Avatar>
                <span className="text-lg font-medium text-white flex items-center space-x-2">
                  <span className="text-indigo-400 text-sm">Hello, </span>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <span>{currentUser ? currentUser.name : "Guest"}</span>
                  )}
                </span>
                {isDialogOpen ? (
                  <ChevronUp className="h-4 w-4 text-white hover:scale-150 transition-transform" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-white hover:scale-150 transition-transform" />
                )}
              </div>
              {isDialogOpen && (
                <div
                  className="absolute right-0 mt-5 w-48 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-4"
                  style={{ transform: "translateY(10px)" }}
                >
                  <ul className="space-y-2">
                    <li
                      className="text-sm text-gray-200 cursor-pointer hover:text-indigo-400 flex items-center space-x-2"
                      onClick={() => navigate("/blogs/myblogs")}
                    >
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span>My Account</span>
                    </li>
                    <hr className="border-gray-600 my-2" />
                    <li
                      className="text-sm text-gray-200 cursor-pointer hover:text-red-500 flex items-center space-x-2"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 text-red-500" />
                      <span className="hover:text-red-500">Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Dialogue Box */}
        {isMobileMenuOpen && (
          <div
            className="sm:hidden fixed inset-0 bg-gray-800 bg-opacity-80 z-20 p-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-start space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg">
              <div
                className="text-sm text-gray-200 cursor-pointer hover:text-indigo-400 flex items-center space-x-2"
                onClick={() => {
                  navigate("/blog/publish");
                  setIsMobileMenuOpen(false);
                }}
              >
                <Plus className="h-5 w-5 text-indigo-400" />
                <span>Create your own blog</span>
              </div>
              <div
                className="text-sm text-gray-200 cursor-pointer hover:text-indigo-400 flex items-center space-x-2"
                onClick={() => {
                  navigate("/blogs/myblogs");
                  setIsMobileMenuOpen(false);
                }}
              >
                <FileText className="h-5 w-5" />
                <span>My Account</span>
              </div>
              <div
                className="text-sm text-gray-200 cursor-pointer hover:text-red-400 flex items-center space-x-2"
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
              >
                <LogOut className="h-5 w-5 text-red-500" />
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

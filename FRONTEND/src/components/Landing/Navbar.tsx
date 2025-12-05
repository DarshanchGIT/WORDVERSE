import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Pen,
  ChevronDown,
  ChevronUp,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Avatar } from "../ui/avatar";
import { Spinner } from "../../components/ui/Spinner";
import { useUser } from "../../hooks/user";
import { Logout } from "../../services/Authservices";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loading, currentUser } = useUser();

  const toggleDialog = () => setIsDialogOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLogout = () => {
    Logout();
    window.location.reload();
  };
  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-full shadow-lg">
        <div className="flex justify-between h-16 items-center px-6">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("AuroraHero")}
          >
            <Pen className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">Wordverse</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300 text-base"
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300 text-base"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300 text-base"
              onClick={() => navigate("/blogs")}
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300 text-base"
              onClick={() => scrollToSection("faqs")}
            >
              FAQs
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300 text-base"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Conditional Rendering */}
          {currentUser ? (
            <div className="flex items-center space-x-4">
              {/* User Menu */}
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
                    {loading ? <Spinner /> : <span>{currentUser.name}</span>}
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
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="text-gray-900 border-gray-600 hover:bg-white/10 hover:text-white rounded-full transition duration-300"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-300"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </div>
          )}

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
      </nav>
    </div>
  );
};

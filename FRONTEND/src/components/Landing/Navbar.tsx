import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Pen } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full z-10 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-full shadow-lg">
        <div className="flex justify-between h-16 items-center px-6">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Pen className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">Wordverse</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300"
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:bg-white/10 hover:text-white rounded-full transition duration-300"
              onClick={() => navigate("/blogs")}
            >
              Blog
            </Button>
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
        </div>
      </nav>
    </div>
  );
};

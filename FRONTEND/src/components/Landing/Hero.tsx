import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">Your stories deserve</span>
            <span className="block text-indigo-500">a beautiful home</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Create, share, and grow with Wordverse. The modern platform for
            writers and bloggers to share their stories with the world.
          </p>
          <div className="mt-8 flex justify-center gap-4 pb-7">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 transition duration-300"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Start Writing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-gray-800 border-gray-700 hover:bg-gray-800 hover:text-gray-300 transition duration-300"
              onClick={() => {
                navigate("/blogs");
              }}
            >
              View Examples
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

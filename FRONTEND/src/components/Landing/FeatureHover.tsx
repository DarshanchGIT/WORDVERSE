import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Extensive Blog Collection",
    description:
      "Browse hundreds of blogs over various topics and stay updated with the latest trends.",
  },
  {
    title: "AI Integration",
    description:
      "Enhance your blogging experience with AI-powered tools for content creation.",
  },
  {
    title: "Rich Text Editor",
    description:
      "Craft your posts with ease using advanced rich text editor for updation, and formatting.",
  },
  {
    title: "Like and Bookmark Blogs",
    description:
      "Save your favorite blogs for later reading or show appreciation with likes.",
  },
  {
    title: "Blog Sharing",
    description:
      "Share your blogs with friends directly from the platform for easy discovery and interaction.",
  },
  {
    title: "Intuitive User Experience",
    description:
      "Navigate and interact with the platform effortlessly, thanks to our user-friendly design.",
  },
];

export const FeatureHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white lg:text-5xl">
          Explore Hundreds of Blogs
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Discover blogs across various topics, from lifestyle to technology,
          all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10">
        {features.map((project, idx) => (
          <div
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-40">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-normal tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

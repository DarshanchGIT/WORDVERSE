import { motion } from "framer-motion";
import { BookOpen, Users, TrendingUp, Shield } from "lucide-react";
import React from "react";

export const Features = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Explore Hundreds of Blogs
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Discover blogs across various topics, from lifestyle to technology,
            all in one place.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BookOpen,
              name: "Extensive Blog Collection",
              description:
                "Browse hundreds of blogs over various topics and stay updated with the latest trends.",
            },
            {
              icon: Users,
              name: "Community Engagement",
              description:
                "Connect with readers and fellow bloggers through comments, likes, and shares.",
            },
            {
              icon: TrendingUp,
              name: "Analytics Dashboard",
              description:
                "Track your most popular blogs, engagement, and performance metrics.",
            },
            {
              icon: Shield,
              name: "Secure Platform",
              description:
                "Enjoy the peace of mind that comes with a platform that prioritizes security.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              {/* Apply backdrop filter with blur */}
              <div className="absolute inset-0 bg-black/50 rounded-xl backdrop-blur-md"></div>

              <div className="relative flex flex-col items-center text-center z-10">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  {React.createElement(feature.icon, {
                    className: "h-6 w-6 text-white",
                    "aria-hidden": "true",
                  })}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.name}
                </h3>
                <p className="mt-3 text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

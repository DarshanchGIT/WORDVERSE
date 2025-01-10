import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export const Testimonials = () => {
  const TestimonialsData = [
    {
      image: "", // No image since we're using icons for avatars
      author: "Alex Johnson",
      role: "Blogger",
      content:
        "This platform has completely transformed my writing experience. It’s intuitive, fast, and the SEO tools are a game-changer. I can now reach a wider audience with less effort, and the interface makes blogging more enjoyable.",
    },
    {
      image: "", // No image, using avatars instead
      author: "Emma Brown",
      role: "Content Creator",
      content:
        "I switched to this platform for my blog, and it’s been a fantastic decision. I love the clean design and the ease with which I can create and edit posts. The analytics features have also been incredibly helpful for tracking my blog’s success.",
    },
    {
      image: "", // No image, using icons for avatars
      author: "Chris Lee",
      role: "Freelance Writer",
      content:
        "I’ve been writing professionally for years, and this platform offers exactly what I need: a fast, reliable, and beautiful way to publish my articles. The scheduling and content management tools have really boosted my productivity.",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          What Our Bloggers Are Saying
        </h2>
        <div className="relative mt-10 md:mt-24">
          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
            {TestimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }} // Moves up slightly on hover
                className="flex flex-col overflow-hidden bg-gray-900 p-6 rounded-xl shadow-lg text-white"
              >
                <div className="flex flex-col justify-between flex-1 relative">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {/* Golden filled stars for rating */}
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    {/* Avatar icon */}
                    <div className="flex-shrink-0 bg-gray-700 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {testimonial.author[0]}
                      </span>
                    </div>

                    <div className="ml-4">
                      <p className="text-base font-bold">
                        {testimonial.author}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export const Testimonials = () => {
  const TestimonialsData = [
    {
      image: "",
      author: "Alex Johnson",
      role: "Blogger",
      content:
        "This platform has completely transformed my writing experience. It’s intuitive, fast, and the SEO tools are a game-changer. I can now reach a wider audience with less effort, and the interface makes blogging more enjoyable.",
    },
    {
      image: "",
      author: "Emma Brown",
      role: "Content Creator",
      content:
        "I switched to this platform for my blog, and it’s been a fantastic decision. I love the clean design and the ease with which I can create and edit posts. The analytics features have also been incredibly helpful for tracking my blog’s success.",
    },
    {
      image: "",
      author: "Chris Lee",
      role: "Freelance Writer",
      content:
        "I’ve been writing professionally for years, and this platform offers exactly what I need: a fast, reliable, and beautiful way to publish my articles. The scheduling and content management tools have really boosted my productivity.",
    },
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white lg:text-5xl">
          What Our Bloggers Are Saying
        </h2>
        <div className="relative mt-10 md:mt-16">
          {" "}
          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-8 md:grid-cols-3">
            {TestimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex flex-col overflow-hidden bg-white p-4 rounded-lg shadow-md text-gray-900"
              >
                <div className="flex flex-col justify-between flex-1 relative">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <FaStar className="w-4 h-4 text-yellow-400" />{" "}
                      <FaStar className="w-4 h-4 text-yellow-400" />
                      <FaStar className="w-4 h-4 text-yellow-400" />
                      <FaStar className="w-4 h-4 text-yellow-400" />
                      <FaStar className="w-4 h-4 text-yellow-400" />
                    </div>

                    <blockquote className="flex-1 mt-6">
                      <p className="text-base font-medium leading-relaxed">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0 bg-gray-700 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-white text-lg">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-semibold">
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

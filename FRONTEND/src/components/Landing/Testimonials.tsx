import { motion } from "framer-motion";
import { TestimonialsData } from "../../assets/testimonials";
export const Testimonials = () => {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Writers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TestimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

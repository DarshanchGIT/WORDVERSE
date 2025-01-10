import { useState } from "react";

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Here are some common questions our bloggers and readers ask.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {[
            {
              question: "How can I start a blog?",
              answer:
                "To start a blog, simply create an account, choose a template, and start writing! You can customize your blog's design, add images, and organize posts by categories.",
            },
            {
              question: "How do I optimize my blog for SEO?",
              answer:
                "To optimize your blog for SEO, make sure your content is keyword-rich, use proper headings, include alt text for images, and ensure fast loading times for your pages.",
            },
            {
              question: "Can I monetize my blog?",
              answer:
                "Yes, you can monetize your blog through methods like affiliate marketing, sponsored posts, and selling your own products or services.",
            },
            {
              question: "How do I get more readers for my blog?",
              answer:
                "To grow your readership, focus on consistently creating high-quality content, promote your blog on social media, and engage with your audience through comments and emails.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-gray-800 border border-gray-700 cursor-pointer hover:bg-gray-700 rounded-2xl"
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {open === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 rounded-b-lg">
                  <p className="text-gray-300">
                    {faq.answer}{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      Learn more
                    </a>{" "}
                    about how to get started with blogging.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-base mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            onClick={() =>
              alert(
                "Sorry, No support avaible at this moment, all officials are busy rn"
              )
            }
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline cursor-pointer"
            target="_blank"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

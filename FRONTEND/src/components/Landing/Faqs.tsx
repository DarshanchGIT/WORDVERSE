import { useState } from "react";

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
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
                "To start a blog, simply create an account and start writing! You can customize your blog's design, add images, and organize posts by categories.",
            },
            {
              question: "Can I share blogs with my friends?",
              answer:
                "Yes, you can easily share blogs with your friends using WhatsApp, X (formerly Twitter), Telegram, or by copying the link directly from the platform.",
            },
            {
              question: "Do you have a subscription model?",
              answer:
                "Not yet! We are actively exploring options to implement a subscription model in the future to provide more premium features for our users.",
            },
            {
              question: "Does the rich-text editor make writing blogs easier?",
              answer:
                "Absolutely! Our rich-text editor simplifies the blogging process by providing features like formatting, adding images, and live previews, making it easy to create professional blogs.",
            },
            {
              question: "How does AI help in writing blogs?",
              answer:
                "Our AI-powered tools assist in generating high-quality content, providing topic suggestions, improving grammar, and optimizing blogs for SEO. This helps you create engaging posts quickly and efficiently.",
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
                <span className="flex text-lg font-medium text-white">
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
                  <p className="text-gray-300 font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

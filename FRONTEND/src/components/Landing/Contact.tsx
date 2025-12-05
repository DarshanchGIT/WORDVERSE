import { useState } from "react";
import darshanlogo from "../../assets/darshanlogo.jpg";
import { sendEmail } from "../../services/Emailservices";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendEmail({ name, email, message });
      alert(`We have received your message, will get back to you Thanks !!`);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-6 bg-gray-900 sm:py-8 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8">
          <div className="flex flex-col justify-between lg:py-4">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Connect with Me!
              </h2>
              <p className="max-w-xl mx-auto mt-2 text-sm leading-relaxed text-white">
                Share your ideas, feedback, or just say hello. We're here to
                listen and help you create your next blog story.
              </p>

              <img
                className="w-full translate-x-16 translate-y-6"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt="Decorative Curve"
              />
            </div>

            {/* Creator Section */}
            <div className="mt-8">
              <blockquote className="mt-2">
                <p className="text-lg leading-relaxed text-white">Made By:</p>
              </blockquote>
              <div className="flex items-center mt-2">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src={darshanlogo}
                  alt="Darshan Choudhary"
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-white">
                    Darshan Choudhary
                  </p>
                  <p className="mt-px text-sm text-gray-400">Developer 10x</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-400">Visit my socials:</p>
                <div className="flex items-center mt-2 space-x-4">
                  <a
                    href="https://github.com/DarshanchGIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                    aria-label="GitHub"
                  >
                    {/* GitHub Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.167 6.84 9.49.5.092.683-.217.683-.483 0-.237-.008-.867-.013-1.7-2.782.605-3.37-1.34-3.37-1.34-.455-1.157-1.11-1.464-1.11-1.464-.91-.623.07-.61.07-.61 1.004.07 1.534 1.03 1.534 1.03.893 1.527 2.343 1.086 2.914.83.092-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.985 1.03-2.685-.103-.254-.446-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.52 9.52 0 0 1 12 5.8c.85.003 1.71.115 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.546 1.38.203 2.396.1 2.65.64.7 1.03 1.593 1.03 2.685 0 3.845-2.34 4.687-4.57 4.935.36.31.68.927.68 1.87 0 1.35-.013 2.44-.013 2.77 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/darshan4dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                    aria-label="Twitter"
                  >
                    {/* Twitter Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175-.004-.349-.013-.522A8.18 8.18 0 0 0 22 5.92a8.233 8.233 0 0 1-2.357.631 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.606.977 4.107 4.107 0 0 0-6.993 3.743 11.654 11.654 0 0 1-8.457-4.267 4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2.8 9.713v.051a4.106 4.106 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.852.07 4.107 4.107 0 0 0 3.833 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.825" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:pl-6">
            <div className="overflow-hidden bg-white rounded-3xl">
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-black">
                  Send suggestion, bug, or praises
                </h3>
                <form className="mt-4" onSubmit={handleFormSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-4 py-3 text-black border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-3 text-black border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-base font-medium text-gray-900"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full px-4 py-3 text-black border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white transition-all duration-200 bg-orange-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { User, Mail, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "../../services/Authservices";
import { ThreeDots } from "react-loader-spinner";
import { Pen, WandSparkles } from "lucide-react";
import bg from "../../assets/bg.mp4";
import { useRedirectUrl } from "../../utils/redicrectUtils";

export const SignUp = () => {
  const navigate = useNavigate();
  const redirectUrl = useRedirectUrl();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await Signup({ name, email, password });
      navigate(redirectUrl);
    } catch (error) {
      setError("Failed to sign up. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        src={bg}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>{" "}
      {/* Adjust opacity here */}
      <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
        <div
          className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowLeft className="h-8 w-8 text-white hover:scale-110 transition-transform mr-2" />
          <Pen className="h-8 w-8 text-indigo-500" />
          <span className="ml-2 text-xl font-bold text-white">Wordverse</span>
        </div>

        <div className="w-full max-w-md flex flex-col bg-gray-800 bg-opacity-70 rounded-3xl shadow-lg p-8">
          <div className="flex items-center space-x-2 mb-8">
            <h2 className="text-3xl font-bold text-white">
              Join the conversation
            </h2>
            <WandSparkles className="text-indigo-400 h-6 w-6" />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="pl-10 block w-full border border-gray-600 rounded-lg h-12 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  className="pl-10 block w-full border border-gray-600 rounded-lg h-12 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  className="pl-10 block w-full border border-gray-600 rounded-lg h-12 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
            </div>

            {/* Display error message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-12 relative"
              disabled={loading}
            >
              {loading ? (
                <ThreeDots
                  visible={true}
                  height="40"
                  width="40"
                  color="white"
                  radius="4"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  wrapperClass=""
                />
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/signin")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Textarea } from "../../ui/textarea";
import { generateTextGemini } from "../../../utils/gemini";
import { ThreeDots } from "react-loader-spinner";
import { ShinyText } from "../../ui/shinytext";
import { Clipboard, CheckCircle, XCircle } from "lucide-react";
import "../../../index.css";
import { TypeAnimation } from "react-type-animation";

export const Aisection = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedTextState] = useState("");
  const [showGeneratedText, setShowGeneratedText] = useState(true);
  const [copyStatus, setCopyStatus] = useState(false);

  const generatedTextRef = useRef<HTMLDivElement>(null);

  const promptGenerate = async () => {
    setLoading(true);
    setGeneratedTextState("");
    const response = await generateTextGemini(prompt);
    console.log(response);
    setShowGeneratedText(true);
    setGeneratedTextState(response);
    setLoading(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const handleClose = () => {
    setShowGeneratedText(false);
  };

  useEffect(() => {
    if (generatedTextRef.current) {
      generatedTextRef.current.scrollTop =
        generatedTextRef.current.scrollHeight;
    }
  }, [generatedText]);

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center space-x-2 mb-8"></div>
      <Card className="bg-gray-800 border-gray-700 border-4">
        <CardHeader>
          <CardTitle className="text-gray-100 font-medium text-lg">
            Generate Text with AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your prompt here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-gray-700 border-gray-600 text-gray-100 custom-scrollbar"
          />

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-base font-light text-white bg-gray-900 hover:bg-gray-700 border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10 relative"
            onClick={promptGenerate}
            disabled={loading}
          >
            {loading ? (
              <ThreeDots
                visible={true}
                height="30"
                width="30"
                color="white"
                radius="4"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ) : (
              <ShinyText text="Generate 🪄" speed={3} />
            )}
          </button>

          {/* Display the generated text below the button */}
          {generatedText && showGeneratedText && (
            <div className="mt-6 flex flex-col">
              <div
                ref={generatedTextRef}
                className="p-4 bg-gray-900 border border-gray-600 rounded-lg text-gray-400 relative h-48 overflow-y-auto mb-4 custom-scrollbar"
              >
                {/* <TextTyper
                  text={generatedText}
                  interval={10}
                  Markup={"code"}
                  className="text-red-600"
                /> */}
                <TypeAnimation
                  sequence={[generatedText, 1000]}
                  wrapper="span"
                  speed={90}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                  className="shiny-text text-sm"
                />
              </div>

              <div className="flex justify-start gap-4">
                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center text-white rounded-full py-1 px-2 mt-2 pl-5 border border-gray-500 hover:bg-gray-600 text-sm"
                >
                  Copy
                  {copyStatus ? (
                    <CheckCircle className="m-2" size={16} />
                  ) : (
                    <Clipboard className="m-2" size={16} />
                  )}
                </button>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="flex items-center text-white rounded-full py-1 px-2 mt-2 border border-gray-500 hover:bg-gray-600 text-sm"
                >
                  <XCircle className="m-2" size={17} />
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

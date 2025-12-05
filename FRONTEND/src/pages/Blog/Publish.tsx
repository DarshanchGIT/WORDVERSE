import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Editor } from "../../components/Blog/publish/Editor";
import { ActionsButtons } from "../../components/Blog/publish/ActionsButtons";
import { TitleBox } from "../../components/Blog/publish/TitleBox";
import { Header } from "../../components/Blog/SingleBlog/Header";
import { Aisection } from "../../components/Blog/publish/Aisection";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-gray-900">
        <Header />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-28 pb-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Blog Editor */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Title Input */}
            <TitleBox title={title} setTitle={setTitle} />

            {/* Rich Text Editor */}
            <Editor content={content} setContent={setContent} />

            {/* Action Buttons */}
            <ActionsButtons title={title} content={content} />
          </div>

          {/* Right Section: AI Text Generation */}
          <div className="md:col-span-1 flex justify-start md:w-full">
            <Aisection />
          </div>
        </div>
      </div>
    </div>
  );
};

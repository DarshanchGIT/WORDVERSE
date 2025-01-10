import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Editor } from "../../components/Blog/publish/Editor";
import { ActionsButtons } from "../../components/Blog/publish/ActionsButtons";
import { TitleBox } from "../../components/Blog/publish/TitleBox";
import { Header } from "../../components/Blog/SingleBlog/Header";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-12">
        {/* Cover Image Input */}
        {/* <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-400">
              Cover Image
            </label>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-400 border-gray-700 hover:bg-gray-800"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Add Cover Image
            </Button>
          </div>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter image URL..."
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {coverImage && (
            <div className="mt-4 relative h-[200px] rounded-xl overflow-hidden">
              <img
                src={coverImage}
                alt="Cover"
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div> */}
        {/* Title Input */}
        <TitleBox title={title} setTitle={setTitle} />

        {/* Rich Text Editor */}
        <Editor content={content} setContent={setContent} />

        {/* Action Buttons */}
        <ActionsButtons title={title} content={content} />
      </main>
    </div>
  );
};

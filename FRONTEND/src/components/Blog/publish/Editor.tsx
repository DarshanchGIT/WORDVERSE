import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats } from "../../../quill/formats/formats";
import { modules } from "../../../quill/modules/modules";

interface EditorProps {
  content: string;
  setContent: (value: string) => void;
}

export const Editor = ({ content, setContent }: EditorProps) => {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="bg-gray-800 rounded-lg text-gray-200 [&_.ql-toolbar]:bg-gray-300 [&_.ql-toolbar]:rounded-t-lg [&_.ql-toolbar]:border-gray-600 [&_.ql-container]:border-gray-600 [&_.ql-editor]:min-h-[300px]"
      />
    </div>
  );
};

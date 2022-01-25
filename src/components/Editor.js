import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

export default function Editor({ value }) {
  const [text, setText] = useState(value);

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setText(content);
  };

  return (
    <div className="quill-editor">
      <EditorToolbar />
      <ReactQuill
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleProcedureContentChange}
      ></ReactQuill>
    </div>
  );
}

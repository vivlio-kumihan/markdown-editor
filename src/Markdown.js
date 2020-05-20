import React from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

const Markdown = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="markdown container">
      <div className="edit">
        <ReactMde value={value} onChange={setValue} />
      </div>
      <div className="preview">
        <h3>Preview</h3>
        <ReactMarkdown source={value} />
      </div>
    </div>
  )
}

export default Markdown
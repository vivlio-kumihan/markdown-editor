import React from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

const Markdown = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="markdown" style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%", marginRight: 10 }}>
        <ReactMde value={value} onChange={setValue} />
      </div>
      <div style={{ width: "50%" }}>
        <h3>Preview</h3>
        <ReactMarkdown source={value} />
      </div>
    </div>
  )
}

export default Markdown
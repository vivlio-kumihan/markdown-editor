import React from "react";
import MDEditor from '@uiw/react-md-editor';
// import MDEditor, { commands } from '@uiw/react-md-editor';

import './assets/css/style.css'

const MDEdit = () => {
  const [value, setValue] = React.useState("# Hello!");
  return (
    <div className="markdown">
      <MDEditor
        value={value}
        onChange={setValue}
        height={550}
        tabSize={4}
        // commands={[
        //   commands.bold, commands.hr, commands.italic, commands.divider, 
        //   commands.codeEdit, commands.codeLive, commands.codePreview, commands.divider,
        //   commands.fullscreen,
        // ]}
      />
    </div>
  );
}

export default MDEdit

// <MDEditor.Markdown source={value} />
// style={{ minHeight: "100vh" }}
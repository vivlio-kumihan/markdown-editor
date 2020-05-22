import React, {useState} from "react"
import SimpleMDE from "react-simplemde-editor"

const toolbar = [
  {
    name: "save",
    action: function customFunction(editor) {
      alert(editor.value())
      // here save action
    },
    className: "fa fa-save",
    title: "Save",
  },
  "|",
  "bold",
  "heading",
  "|",
  "quote",
  "unordered-list",
  "ordered-list",
  "|",
  "link",
  "image",
  "|",
  "preview",
  "side-by-side",
  "fullscreen",
  "|",
  "guide"
]

const MDEdit = () => {
  const [markdown, setMarkdown] = useState("")
  return (
    <div id="simple-mde">
    <SimpleMDE  onChange={(e) => setMarkdown(e)}
                options={{spellChecker: false},{toolbar:toolbar}}
    />
    </div>
  )
}

export default MDEdit

// OPTIONS | SimpleMDE - Markdown Editor
// https://developer.aliyun.com/mirror/npm/package/simplemde
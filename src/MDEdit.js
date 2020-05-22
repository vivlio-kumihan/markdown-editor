import React, {useState} from "react"
import SimpleMDE from "react-simplemde-editor"

const MDEdit = () => {
  const [markdown, setMarkdown] = useState("")
  return (
    <div id="simple-mde">
    <SimpleMDE  onChange={(e) => setMarkdown(e)}
                options={{spellChecker: false}}
    />
    </div>
  )
}

export default MDEdit

// OPTIONS | SimpleMDE - Markdown Editor
// https://developer.aliyun.com/mirror/npm/package/simplemde
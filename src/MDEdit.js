import React, {Component, useState} from "react"
import SimpleMDE from "react-simplemde-editor"

class MDEdit extends Component {
  handleChange = (value) => {
    this.setState({mdeValue: value})
  }
  render() {
    return (
      <div id="simple-mde">
        <SimpleMDE  id="react-mde"
                    label="React simple markdown editor"
                    onChange={this.handleChange} 
                    options={{
                              autofocus: true,
                              spellChecker: false
                            }}
        />
      </div>
    )
  }
}

export default MDEdit
import React from 'react'

function CarEditor() {
    return (
        <div>
    <form className="note-editor">
      <input type="text" name="title" />
      <textarea name="body" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
        </div>
    )
}
export default CarEditor;
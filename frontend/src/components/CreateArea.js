import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({ title: '', content: '' })
  const [click, setClick] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setNote(pv => {
      return { ...pv, [name]: value }
    })
  }
  const handleclick = () => {
    setClick(true)
  }
  return (
    <div>
      <form onSubmit={event => { event.preventDefault() }} className="create-note">
        {click && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={handleclick} onChange={handleChange} name="content" placeholder="Take a note..." rows={click ? '3' : '1'} value={note.content} />
        <Zoom in={click}>
          <Fab onClick={() => {
            if (note.title.trim() !== '' && note.content.trim() !== '') {
              props.addContent(note)
              setNote({ title: '', content: '' })
            }
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;




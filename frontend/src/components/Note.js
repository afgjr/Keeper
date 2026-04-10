import React, { useState, useEffect } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import PaletteIcon from '@mui/icons-material/Palette';

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: props.title, content: props.content, color: props.color || '#fff' });

  const colors = [
    '#ffffff', '#f28b82', '#fbbc04', '#fff475', 
    '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', 
    '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'
  ];

  // Keep local state in sync if props update from backend
  useEffect(() => {
    setEditedNote({ title: props.title, content: props.content, color: props.color || '#fff' });
  }, [props.title, props.content, props.color]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editedNote.title.trim() !== '' && editedNote.content.trim() !== '') {
      props.editNote(props.id, editedNote);
      setIsEditing(false);
    }
  };

  const handleColorSelect = (newColor) => {
    setEditedNote((prev) => ({ ...prev, color: newColor }));
    props.editNote(props.id, { title: editedNote.title, content: editedNote.content, color: newColor });
    setShowPalette(false);
  };

  return (
    <div className="note" style={{ backgroundColor: props.color || '#fff' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
        <PaletteIcon 
          style={{ cursor: 'pointer', color: '#777' }} 
          onClick={() => setShowPalette(!showPalette)} 
          titleAccess="Change Note Color"
        />
        {showPalette && (
          <div style={{
            position: 'absolute', top: '28px', right: '0', 
            background: '#fff', borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)', 
            padding: '8px', width: '130px', 
            display: 'flex', flexWrap: 'wrap', gap: '5px'
          }}>
            {colors.map(c => (
              <div 
                key={c}
                onClick={() => handleColorSelect(c)}
                style={{
                  width: '24px', height: '24px', 
                  borderRadius: '50%', backgroundColor: c, 
                  cursor: 'pointer', border: '1px solid #ccc'
                }}
                title={c}
              />
            ))}
          </div>
        )}
      </div>
      {isEditing ? (
        <>
          <input 
            type="text" 
            name="title" 
            value={editedNote.title} 
            onChange={handleChange} 
            placeholder="Title"
            style={{ width: '100%', border: 'none', outline: 'none', marginBottom: '10px', fontSize: '1.1em', fontWeight: 'bold', backgroundColor: 'transparent' }} 
          />
          <textarea 
            name="content" 
            value={editedNote.content} 
            onChange={handleChange} 
            placeholder="Take a note..."
            rows="3" 
            style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1.1em', resize: 'none', backgroundColor: 'transparent' }} 
          />
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </>
      )}
      <div style={{ position: 'absolute', bottom: '-18px', right: '10px' }}>
        <button onClick={() => props.deleteNote(props.id)}><DeleteIcon/></button>
        {isEditing ? (
          <button onClick={handleSave}><SaveIcon/></button>
        ) : (
          <button onClick={() => setIsEditing(true)}><EditIcon/></button>
        )}
      </div>
    </div>
  );
}

export default Note;

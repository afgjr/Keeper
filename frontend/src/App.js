import React, { useState, useEffect } from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

const API_URL = "http://localhost:5001/api/notes";

function App() {
  const [notes, setNotes] = useState([]);

  // Load all notes from the backend on startup
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNotes(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to load notes:", err));
  }, []);

  // POST a new note to the backend
  const addContent = (note) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    })
      .then((res) => res.json())
      .then((savedNote) => setNotes((pv) => [...pv, savedNote]))
      .catch((err) => console.error("Failed to add note:", err));
  };

  // DELETE a note from the backend using its MongoDB _id
  const deleteNote = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setNotes((pv) => pv.filter((note) => note._id !== id)))
      .catch((err) => console.error("Failed to delete note:", err));
  };

  // PUT update a note in the backend
  const editNote = (id, updatedNote) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        setNotes((pv) => pv.map((note) => (note._id === id ? updatedData : note)));
      })
      .catch((err) => console.error("Failed to edit note:", err));
  };

  return (
    <div className="App">
      <Header />
      <CreateArea addContent={addContent} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          color={note.color}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

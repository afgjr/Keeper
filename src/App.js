import React,{useState} from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  const [notes,setNotes]=useState([])

  const addContent=(note)=>{
 
    setNotes((pv=>{
      return[...pv,note]
    }))

  }
  const deleteNote=(id)=>{
    setNotes((pv=>{
      return pv.filter((note,index)=>{
        return index !==id
      })
    }))
 
  }

  return (
    <div className="App">
      <Header/>
      <CreateArea addContent={addContent}></CreateArea>
      {
        notes.map((note,index)=>(
          <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
        ))
      }
      <Footer/>

    </div>
  );
}

export default App;

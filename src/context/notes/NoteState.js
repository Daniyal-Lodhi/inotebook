import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
  const [notes, setNotes] = useState([])

  const host = "http://localhost:5000";

  // Get notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYzYzYWY3ZWY1Yjg3MmIxNDVmNDI2In0sImlhdCI6MTY4MTg2MTg1MH0.ck375SCVTB24_NzUSmkQtgehZGnvOSR-FfX3rVRVfN0" 
      }
    });
    const json = await response.json();
    // console.log(json)
    setNotes(json)
  }



  // Add Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYzYzYWY3ZWY1Yjg3MmIxNDVmNDI2In0sImlhdCI6MTY4MTg2MTg1MH0.ck375SCVTB24_NzUSmkQtgehZGnvOSR-FfX3rVRVfN0" 
      },
      body: JSON.stringify({title,description,tag})
    });
    console.log("Note added")
    getNotes()


  }
  // delete Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYzYzYWY3ZWY1Yjg3MmIxNDVmNDI2In0sImlhdCI6MTY4MTg2MTg1MH0.ck375SCVTB24_NzUSmkQtgehZGnvOSR-FfX3rVRVfN0" 
      },
    });
    // const deleted = await response.json()
    getNotes()
  }
  // edit Note
  const editNote = async (id,title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYzYzYWY3ZWY1Yjg3MmIxNDVmNDI2In0sImlhdCI6MTY4MTg2MTg1MH0.ck375SCVTB24_NzUSmkQtgehZGnvOSR-FfX3rVRVfN0" 
      },
      body: JSON.stringify({title,description,tag})
    });
    console.log("Note Updated")
    getNotes()


  }
  
  
  

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, getNotes , editNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
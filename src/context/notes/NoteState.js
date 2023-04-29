import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const initialNotes = [
    {
      "_id": "6441bff512f71f60401ec7c7",
      "user": "643c63af7ef5b872b145f426",
      "title": "Mr beast",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:43:01.810Z",
      "__v": 0
    },
    {
      "_id": "6441c06712f71f60401ec7d6",
      "user": "643c63af7ef5b872b145f426",
      "title": "ayo",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:44:55.090Z",
      "__v": 0
    },
    {
      "_id": "6441c0b2219baae5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": "superman",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    },{
      "_id": "6441c0b2f219baaeff5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": "superman",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    },{
      "_id": "6441c0b2219baaffe5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": "superman",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(initialNotes)
  // Add Note
  const addNote = (title,description,tag)=>{
    const note = {
      "_id": "6441c0b2219baaffe5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    }
    setNotes(notes.concat(note))

  }
  // delete Note
  const deleteNote = (id)=>{
      console.log("deleting note with id"+id)
      let newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
  }
  // Edit Note
  const editNote = async(id, title, description, tag)=>{
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index]
                if (element._id === id){ 
                  element.title = title ;
                  element.description = description ;
                  element.tag = tag ;               }        
      }
  }

    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
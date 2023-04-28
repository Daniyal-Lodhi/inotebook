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
      "_id": "6441c0b2219baae5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": "superman",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    },{
      "_id": "6441c0b2219baae5e87f56f1",
      "user": "643c63af7ef5b872b145f426",
      "title": "superman",
      "description": "my Note",
      "tag": "name",
      "date": "2023-04-20T22:46:10.774Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(initialNotes)
  

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"",description:"", tag:"default for now"})
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault() ;
        addNote(note.title,note.description , note.tag)
    }
  return (  
    <div>
        <div className="container my-3">
        <h2>Add a note</h2>
      <form className='container'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Email address</label>
          <input type="text" className="form-control" id="title" name="title" onChange={onChange}aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
      </form>
      </div>
    </div>
  )
}

export default AddNote

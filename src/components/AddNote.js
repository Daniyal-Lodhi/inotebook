import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"",description:"", tag:""})
// on change to seet the note fields to sepcific fields input name
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault() ;
        addNote(note.title,note.description , note.tag)
        setNote({title:"",description:"", tag:""});
    }
  return (  
    <div>
        <div className="container my-3">
        <h2>Add a note</h2>
      <form className='container'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" minLength={5} required className="form-control" value={note.title} id="title" name="title" onChange={onChange}aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input type="text" minLength={5} required className="form-control" value={note.description} id="description" name="description" onChange={onChange} />
        </div> 
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" minLength={5} required className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} />
        </div>
       
        <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
      </form>
      </div>
    </div>
  )
}

export default AddNote

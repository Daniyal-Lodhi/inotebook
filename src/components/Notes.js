import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItems from './NoteItems';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';


const Notes = () => {
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        if (localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate('/Login')
        }
    }, []
    )
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        console.log("updating the note...")
        refClose.current.click();
        editNote(note.id, note.etitle, note.edescription, note.etag)
    }


    const ref = useRef(null)
    const refClose = useRef(null)
    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Update note
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ref={refClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container my-3">
                                <form className='container'>
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" onChange={onChange} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">description</label>
                                        <input type="text" value={note.edescription} className="form-control"  id="edescription" name="edescription" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" value={note.etag} className="form-control" id="etag" name="etag" onChange={onChange} />
                                    </div>

                                    <button type="submit" disabled={note.etitle.length<5||note.edescription.length<5} className="btn btn-primary" onClick={handleUpdate}>Update Note</button>
                                </form>
                            </div>
                        </div>

                    </div>  
                </div>
            </div>
            <div className="container my-3 row">
                <h2>Your Notes</h2>
                <div className='container mx-2'>
                {notes.length === 0 && "No notes to Show"}
                </div>
                {notes.map((note) => {
                    return <NoteItems key={note._id} note={note} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}

export default Notes

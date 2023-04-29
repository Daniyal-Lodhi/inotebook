import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItems from './NoteItems';
import AddNote from './AddNote';


const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <>
        <AddNote/>
        <div className="container my-3 row">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItems key = {note._id} note = {note} />
            })}
        </div>
        </>
    )
}

export default Notes

import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItems from './NoteItems';


const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container my-3 row">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItems key = {note._id} note = {note} />
            })}
        </div>
    )
}

export default Notes

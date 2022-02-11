import React, { useState } from "react";
import NoteListItem from "./NoteListItem.js";
import NoteEditPage from "./NoteEditPage";

const initialNotes = [
    {
        id:"1",
        createdAt: new Date(),
        text: "This is note 1"
    },
    {
        id:"2",
        createdAt: new Date(),
        text: "This is note 2"
    },
    {
        id:"3",
        createdAt: new Date(),
        text: "This is note 3"
    }
];

export default function NoteListPage(props) {
    const [selectedNoteId, setSelectedNoteId] = useState(null)

    const [notes, setNotes] = useState(initialNotes);

    const handleOnSave = (newNoteText) => {
        const updateNotes = notes.map((note) => {
            if(note.id === selectedNoteId) {
                return {
                    ...note,
                    text: newNoteText
                };
            }
            return note;
        });
        setNotes(updateNotes);

        setSelectedNoteId(null);
    };

    if(selectedNoteId){
        const selectedNote = notes.find((note) => note.id === selectedNoteId)

        return (
            <NoteEditPage onSave={handleOnSave} text={selectedNote.text}/>
        )
    }

    const handleListItemClick = (id) => {
        setSelectedNoteId(id);
    }
    
    return (
        <div className="page">
            <h1>Note List</h1>
            <div className="noteList">
                {
                    notes.map((note) => {
                        return (
                            <NoteListItem
                            id={note.id}
                            key={note.id}
                            text={note.text}
                            createdAt={note.createdAt}
                            onClick={handleListItemClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
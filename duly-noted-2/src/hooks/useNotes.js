import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext([])

const reviver = (key, value) => {
    if (key === "createAt") {
        return new Date(value);
    }
    return value;
}

const savedNotes = localStorage.getItem("notes");
const initialNotes = savedNotes ? JSON.parse(savedNotes, reviver) : [];

export function NotesProvider(props) {
    const [notes, setNotes] =useState(initialNotes);

    return (
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default function useNotes() {
    const [notes, setNotes] = useContext(NotesContext);

    function saveNotes(updateNote) {
        setNotes(updateNote);
        localStorage.setItem(notes, JSON.stringify(updateNote));
    }

    return {
        notes,
        createNote() {
            const id = String(notes.length+1);

            const newNote = {
                id, createdAt: new Date(),
                text: ""
            };

            const updateNote = [newNote, ...notes];
            saveNotes(updateNote);

            return newNote;
        },
        deleteNote(id) {
            const checkMatch = note => note.id !== id
            const deleteThis = notes.filter(checkMatch)
            saveNotes(deleteThis);
        },
        updateNote(id, newNoteText) {
            const newNotes = notes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        text: newNoteText
                    };
                }
                return note;
            });
    
            saveNotes(newNotes);
        }
    }
}

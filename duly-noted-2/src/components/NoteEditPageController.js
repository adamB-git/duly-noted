import React from "react";
import NoteEditPage from "./NoteEditPage";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useNotes from "../hooks/useNotes";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const {notes, deleteNote, updateNote, archiveNote} = useNotes();

    const selectedNote = notes.find((note) => note.id === id)
    if (!selectedNote) return null;
    
    const handleSelectedNoteSave = (newText) => {
        let truncatedText = newText.trim();
        if(truncatedText === ''){
            deleteNote(id);
        } else {
            updateNote(id, newText);
        }
        history.goBack();
    }

    const handleSelectedNoteDelete = () => {
        deleteNote(id);
        history.goBack();
    }

    const handleSelectedNoteArchive = (newText) => {
        archiveNote(id, newText);
        history.goBack();
    }

    return (
        <NoteEditPage
            onSave={handleSelectedNoteSave}
            onDelete={handleSelectedNoteDelete}
            onArchive={handleSelectedNoteArchive}
            text={selectedNote.text}
        />
    )

}

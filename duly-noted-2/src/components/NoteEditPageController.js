import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import NoteEditPage from "./NoteEditPage";
import { GET_NOTES } from "./NoteListPage";

const GET_ONE_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            isArchived
            text
        }
    }
`;

const UPDATE_NOTE = gql`
    mutation updateNote($id: ID!, $note: UpdateNoteInput!) {
        updateNote(
            id: $id
            note: $note
        )
        {
            isArchived
            text
        }
    }
`;

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!) {
        deleteNote(
            id: $id
        )
        {
            isArchived
            text
        }
    }
`;

export default function NoteEditPageController() {
    const [updateNote] = useMutation(UPDATE_NOTE, {
        onCompleted(data) {
            if (data && data.updateNote) {
                history.goBack();
            }
        },
        refetchQueries: [
            {
                query: GET_NOTES
            }
        ]
    });

    const [deleteNote] = useMutation(DELETE_NOTE, {
        onCompleted(data) {
            if (data && data.deleteNote) {
                history.goBack();
            }
        },
        refetchQueries: [
            {
                query: GET_NOTES
            }
        ]
    });
    
    const { id } = useParams();
    const history = useHistory();
    const { data } = useQuery(GET_ONE_NOTE, {
        variables: {
            id
        }
    });

    const selectedNote = data && data.note;
    if (!selectedNote) return null;
    
    const handleSelectedNoteSave = (boolean, newText) => {
        if (newText.trim() === "") {
            deleteNote({
                variables: {
                    id: selectedNote.id
                }
            });
        } else {
            updateNote({
                variables: {
                    id: selectedNote.id,
                    note: {
                        isArchived: boolean,
                        text: newText
                    }
                }
            });
        }
    };

    const handleSelectedNoteArchive = (newText) => {
        updateNote({
            variables: {
                id: selectedNote.id,
                note: {
                    isArchived: true,
                    text: newText
                }
            }
        });
    };

    const handleSelectedNoteDelete = () => {
        deleteNote({
            variables: {
                id: selectedNote.id
            }
        });
    };

    return (
        <NoteEditPage
            onSave={handleSelectedNoteSave}
            onDelete={handleSelectedNoteDelete}
            onArchive={handleSelectedNoteArchive}
            text={selectedNote.text}
        />
    )

}

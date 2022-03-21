import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon
} from "@ionic/react";
import NoteListItem from "./NoteListItem";
import { useHistory } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import { add } from "ionicons/icons";

export default function NoteListPage(props) {
    const { notes, createNote } = useNotes();
    const history = useHistory();

    function handleListItemClick(id) {
        history.push(`/notes/edit/${id}`);
    };

    const handleNewNoteClick = () => {
        const { id } = createNote();
        history.push(`/notes/edit/${id}`);
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Note List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList line = "full">
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
                        );
                    })
                    }
                </IonList>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={handleNewNoteClick}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
}

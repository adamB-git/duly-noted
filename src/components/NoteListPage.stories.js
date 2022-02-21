import react from "react";
import NoteListPage from "./NoteListPage";
import NoteListItem from "./NoteListItem";

export default {
    Title: "NoteListItem",
    Component: NoteListPage
};

//
export const Something = () => {

    const notes = [
        {
            id:"1",
            createdAt: new Date(),
            text: "Testing 1"
        },
        {
            id:"2",
            createdAt: new Date(),
            text: "Testing 2"
        }
    ];

    return (notes.map((note) => {
        return (
            <NoteListItem
            id={note.id}
            key={note.id}
            text={note.text}
            createdAt={note.createdAt}
            />
        )
    }))
}

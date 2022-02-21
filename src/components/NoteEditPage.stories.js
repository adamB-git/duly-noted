import react from "react";
import NoteEditPage from "./NoteEditPage";

export default {
    Title: "NoteListItem",
    Component: NoteEditPage
};

//error on save
export const ErrorOnSave = () => {
    const onClick = () => {
        throw new Error ("simulated save error")
    };

    return (<NoteEditPage
                text="text"
                onSave={onClick}
            />);
}

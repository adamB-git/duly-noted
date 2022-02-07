import React from "react";
import PropTypes from "prop-types";
import NoteListItem from "./NoteListItem.js"

export default function NoteListPage(props) {
    const { text } = props;

    return (
        <div className="page">
            <h1>Note List</h1>
            <NoteListItem
            id="123"
            text="Taking notes is very important!"
            dateTimeText="1/25/2020 5:00 pm"
            onClick={handleListItemClick}
            />
        </div>
    );
}

NoteListPage.propTypes = {
    text: PropTypes.string.isRequired
};

function handleListItemClick(id) {
    alert(id + " clicked!")
}

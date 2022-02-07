import React from "react";
import PropTypes from "prop-types";

function NoteListPage(props) {
    const { text } = props;

    return (
        <div className="page">
            <h1>Note List</h1>
            <div className="noteList">
                <div className="noteListItem">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

NoteListPage.propTypes = {
    text: PropTypes.string.isRequired
};

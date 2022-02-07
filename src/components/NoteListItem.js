import React from "react";
import PropTypes from "prop-types";

export default function NoteListItem(props) {
    const { id, text, dateTimeText, onClick } = props;

    return (
        <div className="page">
            <div className="noteListItem">
                <p>{text}</p>
                <p>{dateTimeText}</p>
                <button onClick={() => onClick(id)}>Click</button>
            </div>
        </div>
    );
}

NoteListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dateTimeText: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

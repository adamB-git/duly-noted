import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NoteEditPage(props) {
    const { text, onSave, onCancel, onDelete } = props;

    const [value, setValue] = useState(text);

    return (
        <div className="page">
            <h1>Note Edit</h1>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="button" onClick={() => onSave(value)}>Save</button>
            <button type="button" onClick={() => onCancel()}>Cancel</button>
            <button type="button" onClick={() => onDelete()}>Delete</button>
        </div>
    );
}

NoteEditPage.propTypes = {
    text: PropTypes.string.isRequired
};

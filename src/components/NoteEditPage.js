import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NoteEditPage(props) {
    const { text, onSave } = props;

    const [value, setValue] = useState(text);

    return (
        <div className="page">
            <h1>Note Edit</h1>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="button" onClick={() => onSave(value)}>Save</button>
        </div>
    );
}

NoteEditPage.propTypes = {
    text: PropTypes.string.isRequired
};

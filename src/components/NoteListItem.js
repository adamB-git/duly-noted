import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import formatDate from "../util/formatDate";

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick = () => {},
        text
    } = props;

    // const [timesClicked, setTimesClick] = useState(0);

    let truncatedText;
    if (text.length > 200) {
        truncatedText = `${text.substr(0, 200)}...`;
    } else {
        truncatedText = text;
    }

    // const handleItemClick = (event) => {
    //     event.preventDefault();
    //     setTimesClick(timesClicked + 1);
    //     if (onClick) {
    //         onClick(id)
    //     }
    // }

    return (
        <div className="noteListItem" onClick={() => onClick(id)}>
            <ReactMarkdown children={truncatedText} />
            <p>
                {formatDate(createdAt)}
            </p>
        </div>
    );
}

NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

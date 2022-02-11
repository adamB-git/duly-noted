import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick = () => {},
        text
    } = props;

    const [timesClicked, setTimesClick] = useState(0);

    let truncatedText;
    if (text.length > 200) {
        truncatedText = `${text.substr(0, 200)}...`;
    } else {
        truncatedText = text;
    }

    const handleItemClick = (event) => {
        event.preventDefault();
        setTimesClick(timesClicked + 1);
        if (onClick) {
            onClick(id)
        }
    }

    // const oneHourAgo = Date.now() - (1* 60 * 60 * 1000);

    return (
        <div className="noteListItem" onClick={handleItemClick}>
            <p>
                {truncatedText}
            </p>
            <p>
                {dayjs(createdAt).fromNow()}
                {/* {dayjs(createdAt).format("h:m a on M/D/YYYY")} */}
            </p>
            <p>
                I've been clicked {timesClicked}
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

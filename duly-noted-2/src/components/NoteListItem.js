import React from "react";
import ReactMarkdown from 'react-markdown';
import { IonItem, IonLabel } from "@ionic/react";
import PropTypes from "prop-types";
import formatDate from "../util/formatDate";

export default function NoteListItem(props) {

    const {
        createdAt,
        id,
        onClick = () => {},
        text
    } = props;

    let truncatedText = text.trim();
    
    if (truncatedText.length > 200) {
        truncatedText =truncatedText.substring(0, 201) + "...";
    } else if (truncatedText === ""){
        truncatedText = "No Note Text";
    }

    return (
        <IonItem onClick={() => onClick(id)}>
            <IonLabel>
                <ReactMarkdown children={truncatedText} />
                <p>{formatDate(createdAt)}</p>
            </IonLabel>
        </IonItem>
    );
}

NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

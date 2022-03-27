import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonActionSheet,
    useIonAlert
} from "@ionic/react";
import { chevronBack, ellipsisHorizontal, trash, close } from "ionicons/icons";
import styles from "./NoteEditPage.module.css";
import { useTranslation } from "react-i18next";

export default function NoteEditPage(props) {
    const { onSave, onDelete, text, onArchive } = props;

    const [value, setValue] = useState(text);
    const [showActions, setShowActions] = useState(false);

    const [deleteAlert] = useIonAlert();

    const { t } = useTranslation();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton color="secondary" onClick={() => onSave(value)}>
                            <IonIcon slot="icon-only" icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{t("noteEditPageTitle")}</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton slot="secondary" onClick={() => setShowActions(true)}>
                            <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <textarea className={styles.textArea} value={value} onChange={(event) => setValue(event.target.value)} /><br></br>
                <IonActionSheet
                    isOpen={showActions}
                    onDidDismiss={() => setShowActions(false)}
                    buttons={[
                        {
                            text: t("buttonDelete"),
                            role: "destructive",
                            icon: trash,
                            handler: () => deleteAlert({
                                header: 'Wait!',
                                message: 'Are you sure you want to delete this note?',
                                buttons: [
                                    { text: t("buttonAlertYes"), handler: onDelete },
                                    t("buttonAlertNo")
                                ],
                            })
                        },
                        {
                            text: t("buttonCancel"),
                            role: "cancel",
                            icon: close,
                            handler: () => setShowActions(false)
                        },
                        {
                            text: t("buttonArchive"),
                            handler: onArchive
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    );
}

NoteEditPage.propTypes = {
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired
};

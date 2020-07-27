import { IonHeader, IonToolbar, IonButtons, IonImg, IonTitle, IonMenuButton, IonRow } from "@ionic/react"
import React from "react"
import './MyHeader.css'

const MyHeader: React.FC = () => {
    return(
        <IonRow>
            <IonHeader class="ion-no-border">
                <IonToolbar class="toolbarStyle">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first" />
                    </IonButtons>
                    <IonImg class="logoImg" src="assets/icon/favicon.png" />
                    <IonTitle class="ion-text-center">LawChoice</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonRow>
    )
}

export default MyHeader;

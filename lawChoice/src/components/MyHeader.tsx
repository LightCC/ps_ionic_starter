import { IonHeader, IonToolbar, IonButton, IonButtons, IonImg, IonTitle } from "@ionic/react"
import React from "react"
import './MyHeader.css'

const MyHeader: React.FC = () => {
    return(
        <IonHeader class="ion-no-border">
            <IonToolbar class="toolbarStyle">
                <IonButtons slot="start">
                    <IonButton>About</IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton>Contact</IonButton>
                </IonButtons>
                <IonImg class="logoImg" src="assets/images/scales.svg" />
                <IonTitle class="ion-text-center">LawChoice</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default MyHeader;

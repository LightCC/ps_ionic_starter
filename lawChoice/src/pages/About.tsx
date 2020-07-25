import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonImg, IonContent, IonFooter } from '@ionic/react';
import React from 'react';


const About: React.FC = () => {
    return(
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle class="ion-text-center">About Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonImg src="assets/images/city.jpg" />
            <IonContent class="ion-padding">
                <h1>We Create Dreams</h1>
                <p>
                    Some dummy text.
                </p>
                <p>
                    Some other text about us, rainbows, and butterflies.
                </p>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
                    <IonTitle class="ion-text-center" size="small">
                        1313 Mockingbird Lane.
                        <br></br>
                        Somewhere, MS USA
                    </IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default About;

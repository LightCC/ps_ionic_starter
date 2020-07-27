import { IonPage, IonToolbar, IonTitle, IonImg, IonContent, IonFooter } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';


const About: React.FC = () => {
    return(
        <IonPage>
            <MyHeader />
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

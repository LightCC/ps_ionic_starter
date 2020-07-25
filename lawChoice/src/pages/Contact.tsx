import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonPage, IonContent, IonAlert, IonList, IonItem, IonInput, IonItemDivider, IonTextarea, IonLabel, IonFooter, IonTitle } from '@ionic/react';
import React from "react";


const Contact: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [messageAlert, showMessageAlert] = useState<boolean>(false);
    let history = useHistory();

    const sendMessage = () => {
        if (!name || !email || !message) {
            showMessageAlert(true);
        } else {
            console.log(name, email, message);
            history.push('/home');
        };
    };

    return(
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle class="ion-text-center">
                        Contact Us
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonAlert 
                    isOpen={messageAlert}
                    onDidDismiss={()=> showMessageAlert(false)}
                    header={'Can not do that'}
                    subHeader={'A little problem'}
                    message={'Name, Email, or Message cannot be empty!'}
                    buttons={['OK']}
                />
                <IonList>
                    <IonItem>
                        <IonInput value={name} placeholder="Name"
                            onIonChange={e => setName(e.detail.value!)}>
                        </IonInput>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem>
                        <IonInput value={email} placeholder="Email"
                            onIonChange={e => setEmail(e.detail.value!)}>
                            </IonInput>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem>
                        <IonTextarea rows={15} placeholder="Enter message here" value={message} onIonChange={e => setMessage(e.detail.value!)}>
                        </IonTextarea>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem button onClick = {e => {sendMessage()}}>
                        <IonLabel class='ion-text-center'>
                            Send Message
                        </IonLabel>
                    </IonItem>
                </IonList>
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
};

export default Contact;
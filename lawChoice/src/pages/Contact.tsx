import { IonPage, IonToolbar, IonTitle, 
    IonContent, IonInput, IonTextarea, IonFooter, IonItem,  
    IonAlert, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import MyHeader from '../components/MyHeader';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [messageAlert, showMessageAlert] = useState<boolean>(false);
    let history = useHistory();

    const sendMessage = ()=> {
        if (!name|| !email|| !message){
            showMessageAlert(true);
        } else {
            console.log(name, email, message);
            history.push('/home');
        };
    };

    return(
        <IonPage>
            
            <IonContent>
            <IonAlert 
                isOpen={messageAlert}
                onDidDismiss={()=> showMessageAlert(false)}
                header={'Can not do that'}
                subHeader={'A little problem'}
                message={'Name, Email, or Message cannot be empty!'}
                buttons={['OK']}
            />
            <IonGrid fixed={true}>
                <MyHeader />
            </IonGrid>
                <IonRow>
                    <IonCol>
                        <IonInput value={name} placeholder="Name" 
                            onIonChange={e => setName(e.detail.value!)}>
                        </IonInput>
                    </IonCol>
                    <IonCol>
                        <IonInput value={email} placeholder="Email" 
                            onIonChange={e => setEmail(e.detail.value!)}>
                        </IonInput>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonTextarea rows={15} placeholder="Enter message here" value={message} 
                            onIonChange={e => setMessage(e.detail.value!)}>
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                
                <IonRow class="ion-justify-content-center">
                    <IonItem button onClick = {e=> {sendMessage()}}>
                        <IonLabel class="ion-text-center">
                            Send Message
                        </IonLabel>
                    </IonItem>
                </IonRow>
                <IonRow>
                    <IonFooter>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
                            <IonTitle class="ion-text-center" size="small">1313 Mockingbird Lane</IonTitle>
                        </IonToolbar>
                    </IonFooter>  
                </IonRow>
           
            </IonContent>
            
        </IonPage>
    );
};

export default Contact;

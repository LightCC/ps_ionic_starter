import { IonItem, IonAvatar, IonImg, IonLabel, IonPage, IonContent, IonList } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import lawyerListing from './LawyerDB';
import MyHeader from '../components/MyHeader';

const LawyerList: React.FC = () => {
    const [list] = useState<Array<any>>(lawyerListing);
    const currentListing = list.map(lawyers=>
        <IonItem key={lawyers.id} button routerLink={lawyers.path}>
            <IonAvatar slot="start">
                <IonImg src={lawyers.pic} />
            </IonAvatar>
            <IonLabel>
                <h2>{lawyers.name}</h2>
                <h3>{lawyers.focus}</h3>
                <p>{lawyers.phone}</p>
            </IonLabel>
        </IonItem>
    );

    return(
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonList>
                    {currentListing}
                </IonList>
            </IonContent>
        </IonPage>
    );

};

export default LawyerList;
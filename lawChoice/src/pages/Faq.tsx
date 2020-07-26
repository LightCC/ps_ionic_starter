import { IonItem, IonIcon, IonLabel, IonPage, IonContent, IonButton, IonList, IonListHeader } from "@ionic/react";
import { informationCircleOutline, arrowBackOutline } from 'ionicons/icons';
import React, { useState } from "react";
import FaqListing from "./FaqDB";
import MyHeader from "../components/MyHeader";


const Faq: React.FC = () => {
    const [faqs] = useState<Array<any>>(FaqListing);
    const faqList = faqs.map((issue) =>
        <IonItem key={issue.id} button routerLink={issue.path}>
            <IonIcon slot="start" icon={informationCircleOutline}></IonIcon>
            <IonLabel>
                {issue.title}
            </IonLabel>
        </IonItem>
    );

    return (
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonButton color="light" routerLink="/home">
                    <IonIcon slot="start" icon={arrowBackOutline} />
                        Back
                </IonButton>
                <IonList>
                    <IonListHeader>
                        <h1>FAQ</h1>
                    </IonListHeader>
                    {faqList}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Faq;
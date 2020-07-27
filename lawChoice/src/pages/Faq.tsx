import { IonItem, IonIcon, IonLabel, IonPage, IonContent, IonList, IonListHeader } from "@ionic/react";
import { informationCircleOutline } from 'ionicons/icons';
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
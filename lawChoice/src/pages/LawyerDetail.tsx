import { useState } from 'react';
import lawyerListing from './LawyerDB';
import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonCol } from '@ionic/react';
import MyHeader from '../components/MyHeader';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react';

const LawyerDetail: React.FC<any> = ({match}) => {
    const [list] = useState<Array<any>>(lawyerListing);
    const selectedLawyer = list.find((lawyer)=>{
        return lawyer.id === match.params.id;
    });

    return (
        <IonPage>
            <IonContent>
                <IonGrid fixed={true}>
                    <IonCol size="3">
                        <IonButton color="light" routerLink="/lawyerlist">
                            <IonIcon slot="start" icon={arrowBackOutline} />
                                Back
                        </IonButton>
                    </IonCol>
                    <IonCol size="9">
                        <MyHeader />
                    </IonCol>
                    <IonCard>
                        <IonImg class="detailImage" src={selectedLawyer.pic} />
                        <IonCardHeader>
                            <IonCardTitle>{selectedLawyer.name}</IonCardTitle>
                            <IonCardSubtitle>{selectedLawyer.phone}</IonCardSubtitle>
                            <IonCardSubtitle>{selectedLawyer.web}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {selectedLawyer.info}
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default LawyerDetail;
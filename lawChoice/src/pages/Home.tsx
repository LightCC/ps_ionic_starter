import { IonContent, IonPage, IonList, IonItem, IonImg, IonItemGroup, IonLabel, useIonViewDidEnter } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader'
import './Home.css';
import { Plugins } from '@capacitor/core';

const Home: React.FC = () => {

  const {Geolocation} = Plugins;
  const coordinates = Geolocation.getCurrentPosition();
  useIonViewDidEnter(() => {
    console.log('Location', coordinates);
  });

  return (
    <IonPage>
      <MyHeader />
      <IonContent>
        <IonList>
          <IonItemGroup>
            <IonItem button routerLink="/lawyerlist">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonItem>
            <IonItem button routerLink="/lawyerlist">
              <IonLabel class="ion-text-center">
                LAWYERS
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/blog">
              <IonImg src="assets/images/blog.jpg" />
            </IonItem>
            <IonItem button routerLink="/blog">
              <IonLabel class="ion-text-center">
                Blog
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/faq">
              <IonImg src="assets/images/faq.jpg" />
            </IonItem>
            <IonItem button routerLink="/faq">
              <IonLabel class="ion-text-center">
                FAQ
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

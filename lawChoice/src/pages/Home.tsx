import { IonContent, IonPage, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader'
import './Home.css';

const Home: React.FC = () => {

  // const {Geolocation} = Plugins;
  // const coordinates = Geolocation.getCurrentPosition();
  // useIonViewDidEnter(() => {
  //   console.log('Location', coordinates);
  // });

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed={true}>
          <MyHeader />
          <IonRow class="ion-align-items-center">
            <IonCol size="6">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonCol>
            <IonCol size="3">
              <IonRow>
                Some text about our Blog. These are more things about the blog.
              </IonRow>
              <IonRow>
                <IonImg src="assets/images/blog.jpg" />
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow>
                <IonImg src="assets/images/faq.jpg" />
              </IonRow>
              <IonRow>
                Some sample text about our FAQ. Do you like our FAQiness?
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            More sample text about a bunch of things, possibly in Latin. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows. This is probably a bunch of rows.
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonImg src="assets/images/sample-banner.png" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

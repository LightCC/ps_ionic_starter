import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader />
      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Home;

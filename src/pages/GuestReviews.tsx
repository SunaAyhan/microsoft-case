import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import TextArea from '../components/TextArea';
import ReviewPage from '../components/Reviews';

const GuestReview: React.FC = () => {



  return (
    <IonPage className="custom-background" >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>TEXT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="custom-background" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="ion-title" size="large">text</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ReviewPage />
      </IonContent>
    </IonPage>
  );
};

export default GuestReview;

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import TextArea from '../components/TextArea';
import ReviewPage from '../components/Reviews';
import './GuestReviews.css'
import Menu from '../components/Menu';
const GuestReview: React.FC = () => {



  return (<IonPage className="custom-background" >

    <IonHeader className='ion-header-custom' > <Menu />
      <IonToolbar className='ion-header-custom'>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle  >Guest Messages</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle className='ion-header-title' size="large">Guest Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ReviewPage />
    </IonContent>
  </IonPage>

  );
};

export default GuestReview;

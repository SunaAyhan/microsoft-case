import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import TextArea from '../components/TextArea';
import ReviewPage from '../components/Reviews';
import './SendMessage.css'
import Menu from '../components/Menu';
const SendMessage: React.FC = () => {



  return (
    <IonPage   >
      <Menu />
      <IonHeader className='ion-header-custom' >
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Send Your Message</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className='ion-header-title' size="large">Send Your Message</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TextArea />
      </IonContent>
    </IonPage>
  );
};

export default SendMessage;

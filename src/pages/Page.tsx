import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import TextArea from '../components/TextArea';
import ReviewPage from '../components/Reviews';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage className="custom-background" >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent  className="custom-background" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle  className="ion-title" size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name={name} /> */}
        {/* <TextArea  /> */}
        <ReviewPage/>
      </IonContent>
    </IonPage>
  );
};

export default Page;

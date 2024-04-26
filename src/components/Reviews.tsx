import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import './Reviews.css';
import axios from 'axios';

function ReviewPage() {
  const isMobile = window.innerWidth < 768;
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/get-messages')
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <IonContent className='ion-content-custom' color="light">
      <IonCard  >
        <img style={{
          display: isMobile ? 'block' : 'none',
          height: '50%'

        }} className='image' src='../../public/assets/louvre.jpg' />
      </IonCard>
      <IonList className='ion-list-custom' inset={true}>
        {messages.map(message => (
          <IonItem key={message._id}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + message._id} alt="avatar" />
            </IonAvatar>
            <IonLabel><b>{message.fullName}:</b> {message.message}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }} >  <IonButton className='ion-button-custom' >Write Message</IonButton></div>

    </IonContent>
  );
}
export default ReviewPage;
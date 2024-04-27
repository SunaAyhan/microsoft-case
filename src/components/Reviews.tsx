import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import './Reviews.css';
import axios from 'axios';
import louvreImage from '../../public/assets/louvre.jpg';

function ReviewPage() {
  const isMobile = window.innerWidth < 768;
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    axios.get('https://visitorapi.sunaayhan.com/get-messages')
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  }, []);
  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString()
  };

  return (
    <IonContent className='ion-content-custom' color="light">
      <IonCard  >
        <img alt="Louvre" style={{ display: isMobile ? 'block' : 'none', height: '50%' }} className='image' src={louvreImage} />
      </IonCard>
      <IonList style={{
        margin: isMobile ? '1rem' : '2rem'

      }} className='ion-list-custom' inset={true}>
        {messages.map(message => (
          <IonItem key={message._id}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + message._id} alt="avatar" />
            </IonAvatar>
            <IonLabel><b style={{
              color: '#0F2C59'
            }} >{message.fullName}:</b> {message.message}  <div style={{ float: 'right', color: 'grey' }}>
                {formatDate(message.createdAt)}
              </div> </IonLabel>
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
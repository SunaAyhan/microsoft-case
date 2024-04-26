import React, { useState } from 'react';
import { IonContent, IonItem, IonTextarea, IonCard, IonInput, IonList, IonButton } from '@ionic/react';
import axios from 'axios';
import './TextArea.css';

function TextArea() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-review', { fullName, email, message });
      console.log(response.data); // handle response as needed
    } catch (error) {
      console.error('Error sending review:', error);
    }
  };

  return (
    <IonContent color="light">
      <IonCard className='ion-card-custom'>
        <IonList>
          <IonItem>
            <IonInput
              value={fullName}
              onIonChange={e => setFullName(e.detail.value ?? '')} // Using ?? operator to fallback to empty string if null or undefined
              placeholder="Full name">
            </IonInput></IonItem>

          <IonItem>
            <IonInput
              value={email}
              onIonChange={e => setEmail(e.detail.value ?? '')} // Same fallback for email
              placeholder="Email">
            </IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea
              value={message}
              onIonChange={e => setMessage(e.detail.value ?? '')} // And for message
              style={{ height: '10rem', textAlign: 'start' }}
              placeholder="Your Reviews">
            </IonTextarea>
          </IonItem>

        </IonList>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <IonButton onClick={handleSubmit}>Send</IonButton>
        </div>
      </IonCard>
    </IonContent>
  );
}

export default TextArea;

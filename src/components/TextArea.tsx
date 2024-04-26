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
      const response = await axios.post('http://localhost:3000/send-message', { fullName, email, message });
      console.log(response.data);
    } catch (error) {
      console.error('Sending Message Error :', error);
    }
  };

  // Check if the screen is less than 768 pixels wide
  const isMobile = window.innerWidth < 768;

  return (
    <IonContent className='ion-content-custom' color={'light'}>
      <IonCard className='ion-main-card-custom' style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}> {/* Adjust direction based on screen size */}
        <div style={{
          position: 'relative',
          backgroundImage: `url(../../public/assets/louvre2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: isMobile ? '100%' : '50%', // Adjust width based on screen size
          height: '400px',
        }}>
          {/* <IonButton className='ion-button-upload' style={{
            position: 'absolute',
            top: isMobile ? '50%' : '50%', // Positioning the button at the bottom in mobile and center in web
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            Upload Photo
          </IonButton> */}
        </div>
        <IonCard className='ion-card-custom' style={{ flex: 1 }}>
          <IonList>
            <IonItem>
              <IonInput
                value={fullName}
                onIonChange={e => setFullName(e.detail.value ?? '')}
                placeholder="Full name">
              </IonInput>
            </IonItem>

            <IonItem>
              <IonInput
                value={email}
                onIonChange={e => setEmail(e.detail.value ?? '')}
                placeholder="Email">
              </IonInput>
            </IonItem>

            <IonItem>
              <IonTextarea
                value={message}
                onIonChange={e => setMessage(e.detail.value ?? '')}
                style={{ height: '10rem', textAlign: 'start' }}
                placeholder="Your Messages">
              </IonTextarea>
            </IonItem>
          </IonList>
        </IonCard>
      </IonCard>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <IonButton className='ion-button-custom' onClick={handleSubmit}>Send</IonButton>
      </div>
    </IonContent>
  );
}

export default TextArea;

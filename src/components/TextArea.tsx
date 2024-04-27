import React, { useState } from 'react';
import { IonContent, IonItem, IonTextarea, IonCard, IonInput, IonList, IonButton, IonAlert } from '@ionic/react';
import axios from 'axios';
import './TextArea.css';
import louvreImage2 from './assets/louvre2.jpg'; // Import the image here, adjust the path as necessary

function TextArea() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-message', { fullName, email, message });
      console.log(response.data);
      setAlertMessage("Your message has been sent, thank you for your comments.");
      setShowAlert(true);
    } catch (error) {
      console.error('Sending Message Error :', error);
      setAlertMessage("Failed to send the message.");
      setShowAlert(true);
    }
  };


  const isMobile = window.innerWidth < 768;

  return (
    <IonContent className='ion-content-custom' color={'light'}>
      <IonCard className='ion-main-card-custom' style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{
          position: 'relative',
          backgroundImage: `url(${louvreImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: isMobile ? '100%' : '50%',
          height: '400px',
        }}>
        </div>
        <IonCard className='ion-card-custom' style={{ flex: 1 }}>
          <IonList>
            <IonItem>
              <IonInput
                value={fullName}
                onIonChange={e => setFullName(e.detail.value ?? '')}
                placeholder="Full Name">
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
                placeholder="Your Message">
              </IonTextarea>
            </IonItem>
          </IonList>
        </IonCard>
      </IonCard>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <IonButton className='ion-button-custom' onClick={handleSubmit}>Send</IonButton>
      </div>


      <IonAlert

        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Welcome To The Louvre'}
        message={alertMessage}
        buttons={['OK']}
      />
    </IonContent>
  );
}

export default TextArea;

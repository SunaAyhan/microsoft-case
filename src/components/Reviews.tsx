import React from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import './Reviews.css';

function ReviewPage() {
    const isMobile = window.innerWidth < 768; // Basit bir mobil kontrol

  return (
    <IonContent color="light">
        <IonCard  >
            <img style={{
          display: isMobile ? 'block' : 'none', 
          height: '50%'

          
      }} className='image' src='../../public/assets/louvre.jpg' />
        </IonCard>
      <IonList className='ion-list-custom' inset={true} >
      <IonItem >
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' } alt="avatar" />
            </IonAvatar>
           <IonLabel> <b>Suna Ayhan:</b>  It was a great experience!</IonLabel>
          </IonItem>
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>
      <div style={{
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
  }} >  <IonButton className='ion-button-custom' >Write Review</IonButton></div>
    
    </IonContent>
  );
}
export default ReviewPage;
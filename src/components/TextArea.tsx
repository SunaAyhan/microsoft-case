import React from 'react';
import { IonItem, IonTextarea } from '@ionic/react';
import { IonCard } from '@ionic/react';
import { IonInput, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import './TextArea.css';


function TextArea() {
  return (
    <div  ><IonCard style={{
        margin:'4rem',
        
    }} >  
    <IonList>
    <IonItem>
      <IonInput style={{
        margin:'0rem', padding:'0rem'
      }} placeholder="fullname"></IonInput>
    </IonItem>
    <IonItem>
      <IonInput placeholder="email"></IonInput>
    </IonItem>

    <IonItem>
      <IonTextarea style={{
        height:'10rem',
        textAlign:'start',
        
      }} label="Your Reviews" labelPlacement="stacked"></IonTextarea>
    </IonItem>

  </IonList>
  <div style={{
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
  }} > <IonButton  >Send</IonButton></div>
 

  </IonCard></div>
    
   
  );
}
export default TextArea;
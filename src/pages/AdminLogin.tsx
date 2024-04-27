import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel, IonCard, IonText, useIonRouter } from '@ionic/react';
import './AdminLogin.css';
import loginImage from '../../public/assets/louvre.jpg'; // Burada kendi resminizin yolunu verin
import Cookies from "js-cookie";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isMobile = window.innerWidth < 768;
    const router = useIonRouter();


    const handleLogin = async (e: any) => {
        e.preventDefault();

        try {
            const formData = {
                email: email,
                password: password,
            }
            const response = await fetch("https://visitorapi.sunaayhan.com/backend-login-endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                Cookies.set('token', data.token);
                router.push('/admin-panel')

            } else {

                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {

            console.error("Login Error:", error);
        }
    };


    return (
        <IonPage className='ion-page-custom'>
            <IonContent>
                <div className="ion-content-custom">
                    <IonText className='ion-text-custom'>
                        Louvre Guestbook
                    </IonText>
                    <IonCard className='login-card-custom' style={{ display: 'flex', overflow: 'auto' }}>
                        <img src={loginImage} alt="Login" style={{ width: '50%', objectFit: 'cover', display: isMobile ? 'none' : 'block', }} />
                        <div style={{ width: isMobile ? '100%' : '50%', padding: '20px' }}>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" value={email || ''} onIonChange={e => setEmail(e.detail.value!)} />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" value={password || ''} onIonChange={e => setPassword(e.detail.value!)} />
                            </IonItem>
                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <IonButton className='ion-button-login' expand="full" onClick={handleLogin}>Login</IonButton>
                            </div>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;

import React, { useEffect, useState } from 'react';
import { IonContent, IonList, IonItem, IonButton, IonLabel, IonCard, IonPage, IonText, useIonRouter } from '@ionic/react';
import './AdminPanel.css';
import Cookies from "js-cookie";
import axios from 'axios';

const AdminPanel = () => {
    const [messages, setMessages] = useState<any[]>([])

    const [updated, setUpdated] = useState(false)

    const token = Cookies.get("token");
    const router = useIonRouter();
    const handleApprove = (id: any) => {
        console.log(id.target.id)
        axios
            .post("http://localhost:3000/approve-messages",
                {
                    token: token,
                    id: id.target.id
                })
            .then((response) => {
                setUpdated(true)
            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    }

    const handleReject = (id: any) => {
        console.log(id.target.id)
        axios
            .post("http://localhost:3000/reject-messages",
                {
                    token: token,
                    id: id.target.id
                })
            .then((response) => {
                setUpdated(true)
            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    }
    useEffect(() => {

        if (!token) {
            router.push("/login");
        }

        axios
            .post("http://localhost:3000/get-unapproved-messages",
                {

                    token: token
                })
            .then((response) => {
                if (response.data.messagesList) {
                    setMessages(response.data.messagesList);
                    console.log("response")
                }

            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    }, [updated]);


    return (
        <IonPage className='ion-page-custom'>
            <IonContent>
                <div className="ion-content-custom">
                    <IonText className='ion-text-custom'>
                        Louvre Guestbook
                    </IonText>
                    <IonCard className='card-custom' >   <IonList>
                        {messages.map((comment) => (
                            <IonItem key={comment.id}>
                                <IonLabel className='label-custom' > <b> {comment.fullName} :</b> {comment.message} </IonLabel>
                                <IonButton className='button-accept' id={comment._id} onClick={handleApprove} color="success" >Accept</IonButton>
                                <IonButton className='button-accept' color="danger" id={comment._id} onClick={handleReject} >Reject</IonButton>
                            </IonItem>
                        ))}
                    </IonList>
                    </IonCard>

                </div>
            </IonContent>
        </IonPage>

    );
};

export default AdminPanel;

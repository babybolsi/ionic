import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
} from "@ionic/react";
import NotLogged from "../components/NotLogged";
import Logged from "../components/Logged";
import Loader from "../components/Loader";
import "./Tab3.css";
import { Storage } from "@ionic/storage";
import { useState, useEffect } from "react";

function Account(props) {
    //let isLoggedIn = false;
    const [isLoggedIn, setLogged] = useState(0);
    useEffect(() => {
        document.title = "Account";
        verifica();
    }, [isLoggedIn]);

    async function verifica() {
        const storage = new Storage({
            name: "shopdb",
        });
        await storage.create();
        const id = await storage.get("id");
        //console.log(id);
        if (id !== undefined && id !== null) {
            setLogged(1);
        } else {
            setLogged(2);
        }
    }

    if (isLoggedIn === 1) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Account</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <Logged></Logged>
                </IonContent>
            </IonPage>
        );
    } else if (isLoggedIn === 2) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Account</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <NotLogged name="Non hai fatto il Log-In" />
                </IonContent>
            </IonPage>
        );
    } else if (isLoggedIn === 0) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Account</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <Loader></Loader>
                </IonContent>
            </IonPage>
        );
    }
}

export default Account;

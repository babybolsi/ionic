import { IonContent, useIonViewWillEnter,IonSegment,IonLabel,IonSegmentButton } from "@ionic/react";
import {useEffect ,useState} from 'react'
import{Storage} from '@ionic/storage'
import './ExploreContainer.css'
import OrderHistory from "./OrederHistory";
import { logoWindows, returnUpBackOutline } from "ionicons/icons";
function Logged() {
    const [user,setUser]=useState()
    const [segment,setSegment]=useState(0);
    useEffect(()=>{
        getUser()
    },[user])
    useIonViewWillEnter(() => {
        
    });
    async function getUser(){
        const storage = new Storage({
            name: "shopdb",
        });
        await storage.create();
        const username = await storage.get("user");
        setUser(username)
    }
    const acc=()=>{
        setSegment(0)
    }
    const order=()=>{
        setSegment(1)
    }
    const logout=async()=>{
        const storage = new Storage({
            name: "shopdb",
        });
        await storage.create();
        await storage.remove("id");
        await storage.remove("user");
        await storage.remove("email");
        window.location.reload();
    }
    if(segment===0){
        //account page
        return(
            <>
               <div className="c-s">
                <IonSegment value="default" mode="ios">
                    <IonSegmentButton value="default" onClick={acc}>
                        <IonLabel>Account</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="segment" onClick={order}>
                        <IonLabel>Ordini</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>

            
            <div className="container">
                <h1>Ciao {user} cane <br></br>al momento non puoi fare niente</h1>
                <div className="w-11/12 mx-auto mt-2">
                    <button onClick={logout} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mx-auto text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                        Logout
                    </button>
                </div>
            </div> 
            </>
        )
    }else if(segment===1){
        //order page
        return(
            <>
            <div className="c-s">
                <IonSegment value="default" mode="ios">
                    <IonSegmentButton value="account"onClick={acc} >
                        <IonLabel>Account</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="default" onClick={order}>
                        <IonLabel>Ordini</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>

            
            <div className="">
                <OrderHistory></OrderHistory>
            </div>
            </>
        )
    }
    /*return (
        <>  
            <div className="c-s">
                <IonSegment value="default" mode="ios">
                    <IonSegmentButton value="default">
                        <IonLabel>Account</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="segment">
                        <IonLabel>Ordini</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>

            
            <div className="container">
                <h1>Ciao {user} cane</h1>
            </div>
            
        </>
    );*/
}

export default Logged;

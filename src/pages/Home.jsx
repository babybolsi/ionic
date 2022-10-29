import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonViewWillEnter } from '@ionic/react';

import './Tab1.css';

function Home() {
  useIonViewWillEnter(async ()=>{
    document.title="Home"
    //console.log("sono nella home")
  })
  return ( 
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

        </IonContent>
      </IonContent>
    </IonPage>
   );
}

export default Home;


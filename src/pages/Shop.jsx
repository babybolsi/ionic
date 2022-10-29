import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonViewWillEnter  } from '@ionic/react';
import './Tab2.css';

function Shop() {
  useIonViewWillEnter(async ()=>{
    document.title="Shop"
    //console.log("sono nella home")
  })
  return ( 
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shop</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

        </IonContent>
      </IonContent>
    </IonPage>
   );
}

export default Shop;


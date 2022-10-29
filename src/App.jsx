import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline ,cartOutline, personOutline, home,cart , person} from 'ionicons/icons';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Account from './pages/Account';
import {useEffect, useState} from 'react';

import { Storage } from "@ionic/storage";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './index.css'

setupIonicReact({
  mode: 'md',
});

function App() {
  const [selectedTab,setSelected]=useState();
  const prova=()=>{
    console.log("cambioooo")
  }
  useEffect(()=>{
    getInitialTab();
  },[selectedTab])

  const getInitialTab=async()=>{
    const storage = new Storage({
      name: "shopdb",
    });
    await storage.create();
    const tab=await storage.get("tab");
    if(tab===undefined || tab===null){
      setSelected("home");
    }else{
      setSelected(tab);
    }
  }

  const activeTab= async(event)=>{
    const storage = new Storage({
      name: "shopdb",
    });
    await storage.create();
    await storage.set("tab", event.detail.tab);
    const tab=await storage.get("tab");
    if(tab===undefined || tab===null){
      setSelected("home");
    }else{
      setSelected(tab);
    }
  }

  return ( 
    <IonApp>
    <IonReactRouter>
      <IonTabs  onIonTabsWillChange={e=>activeTab(e)}>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={selectedTab==='home' ? home : homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="shop" href="/shop">
            <IonIcon icon={selectedTab==='shop' ? cart : cartOutline} />
            <IonLabel>Shop</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={selectedTab==='account' ? person : personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
   );
}

export default App;


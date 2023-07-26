import React, { useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../Header";
import CardsContainer from "../CardsContainer";
import { playCircle, radio, library, search } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import BottomTabs from "../BottomTabs";
import MenuComponent from "../MenuComponent";
import { useDispatch } from "react-redux";
import { getConfigRequest } from "../../store/actions/appAction";
function MenuComp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfigRequest({}));
  }, []);

  return (
    <>
      <MenuComponent />
      <IonPage id="main-content">
        <Header />
        <IonContent fullscreen>
          <CardsContainer />
        </IonContent>
        {/* footer */}
        <IonFooter translucent>
          <IonToolbar>
            <BottomTabs />
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}
export default MenuComp;

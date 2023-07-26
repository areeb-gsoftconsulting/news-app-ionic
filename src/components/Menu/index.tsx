import React, { useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSegment,
  IonSegmentButton,
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
import styles from "../Header/header.module.css";
import dunyaLogo from "../../images/dunya.jpeg";

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
          {/* /channels */}
          <IonToolbar>
            <IonSegment scrollable value="all">
              <IonSegmentButton value="faoites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="fa3voites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="fav4oites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="favo5ites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="fav56oites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="f55avoites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="favo6ites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
              <IonSegmentButton value="favo77ites">
                <IonImg className={styles.channelLogos} src={dunyaLogo} />
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
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

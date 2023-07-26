import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getConfigRequest } from "../../store/actions/appAction";
import styles from "../Header/header.module.css";
import dunyaLogo from "../../images/dunya.jpeg";
import getCategoryNews from "../../services/getCategoryNews";

function MenuComp() {
  const dispatch = useDispatch();
  const [news, setNews] = useState(null);
  const [loader, seLoader] = useState(false);
  const channels = useSelector((state: any) => state.app?.channels);
  console.log({ channels });
  const channelArray = Object.entries(channels);

  useEffect(() => {
    dispatch(getConfigRequest({}));
  }, []);

  const getChannelNews = async () => {
    seLoader(true);
    // setPaginationError('');
    // setPageNumber(2);

    try {
      let response = await getCategoryNews(
        {
          category: categories,
          source: selectedChannel.toString(),
        },
        1,
        20
      );
      if (response && response?.status == true) {
        setNews(response?.data);
      }
      seLoader(false);
    } catch {
      seLoader(false);
    }
  };

  return (
    <>
      <MenuComponent />
      <IonPage id="main-content">
        <Header />
        <IonContent fullscreen>
          {/* /channels */}
          <IonToolbar>
            <IonSegment scrollable value="all">
              {channelArray.map((data: any, index: any) => (
                <IonSegmentButton value={data[1]?.key}>
                  <IonImg
                    className={styles.channelLogos}
                    src={data[1]?.image}
                  />
                </IonSegmentButton>
              ))}
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

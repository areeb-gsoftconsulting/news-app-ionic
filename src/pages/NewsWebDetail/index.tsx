import React, { useEffect, useState } from "react";
AbortSignal;
import HeaderWithoutTabs from "../../components/Header/Header";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonPage,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Iframe from "react-iframe";
import { disableLoading, enableLoading } from "../../store/slice/loadingSlice";
import { IonLoading } from "@ionic/react";
const NewsWebDetail: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location?.state?.id;
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(null);
  // console.log("111111", dispatch(enableLoading()));
  console.log("id", id);

  const handleIframeLoad = () => {
    // After the iframe has loaded, hide the loading spinner
    setLoading(false);
  };

  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent>
        <Iframe
          url={id}
          width="100%"
          height="100%"
          id=""
          className=""
          display="block"
          position="relative"
          onLoad={handleIframeLoad}
          onError={(error) => {
            console.log("error", error);
          }}
          sandbox="allow-scripts allow-same-origin
       allow-presentation"
        />
        <IonLoading isOpen={loading} message={"Loading..."} />
      </IonContent>
    </IonPage>
  );
};

export default NewsWebDetail;

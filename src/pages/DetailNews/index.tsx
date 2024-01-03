/** @format */

import React, { memo, useDeferredValue, useEffect, useState } from "react";
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
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useSelector } from "react-redux";
import noImage from "../../images/no-image.png";
import {
  save,
  saveOutline,
  shareSocialOutline,
  logoFacebook,
  logoTwitter,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import getNewsDetail from "../../services/getNewsDetail";
import { useToast } from "../../hooks/useToast";

const DetailNews: React.FC = () => {
  const [data, setData] = useState(null);
  const { presentToast } = useToast();

  const [imageError, setImageError] = useState(false);
  const { id } = useParams<{ id: string }>();

  console.log("id", id);
  const handleImageError = () => {
    setImageError(true);
  };

  const getNewsDetailsMethod = async () => {
    try {
      const response = await getNewsDetail("65955a1878127ba14144c273");
      // console.log("response", response?.data);
      if (response?.data) {
        setData(response?.data);
      } else {
        console.log("error to call api");
        presentToast(response?.error || "");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    if (id) {
      getNewsDetailsMethod();
    }
  }, [id]);

  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent>
        <IonToolbar style={{}}>
          <IonButtons>
            <IonButton>
              <IonIcon icon={logoTwitter} />
            </IonButton>
            <IonButton>
              <IonIcon icon={logoFacebook} />
            </IonButton>
            <IonButton>
              <IonIcon icon={shareSocialOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={saveOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <div style={{ padding: 20 }}>
          <IonImg
            style={{ height: 300 }}
            onError={handleImageError}
            src={!imageError ? data?.image : noImage}
          />
          <IonTitle
            style={{
              textAlign: "center",
              fontFamily: "urduFont",
            }}>
            {data?.title}
          </IonTitle>
          <p
            style={{
              textAlign: "end",
              fontFamily: "urduFont",
            }}>
            {data?.summary}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default memo(DetailNews);

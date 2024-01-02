import React, { useState } from "react";
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

const DetailNews: React.FC = () => {
  const data = useSelector((state: any) => state.app.onNewsDtail);
  console.log("data", data);
  const [imageError, setImageError] = useState(false);
  const { id } = useParams<{ id: string }>();

  const handleImageError = () => {
    setImageError(true);
  };
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
            src={!imageError ? data[0]?.image : noImage}
          />
          <IonTitle
            style={{
              textAlign: "center",
              fontFamily: "urduFont",
            }}
          >
            {data[0].title}
          </IonTitle>
          <p
            style={{
              textAlign: "end",
              fontFamily: "urduFont",
            }}
          >
            {data[0].summary}
          </p>
        </div>
      </IonContent>
      {/* <IonContent>
        <h1>23456789</h1>
      </IonContent> */}
    </IonPage>
  );
};

export default DetailNews;

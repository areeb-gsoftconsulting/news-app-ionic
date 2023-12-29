import React from "react";
AbortSignal;
import HeaderWithoutTabs from "../../components/Header/Header";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
const DetailNews: React.FC = () => {
  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent fullscreen>
        <IonGrid
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <IonRow>
            <IonCol>
              <IonText
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Detail News page
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DetailNews;

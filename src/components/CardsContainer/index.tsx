import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";
import { saveSharp } from "ionicons/icons";
import { useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import moment from "moment";
import styles from "./cards.module.css";

const CardsContainer: React.FC = ({ news, loader }: any) => {
  console.log("cards com", news);
  const channels = useSelector((state: reducerState) => state.app?.channels);

  let cards = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

  return (
    <IonGrid>
      <IonRow>
        {loader == true || news == null
          ? cards.map((data, index) => {
              return (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="4"
                  sizeLg="4"
                  sizeXl="2"
                >
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>Card Title</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Here's a small text description for the card content.
                      Nothing more, nothing less.
                    </IonCardContent>
                    <IonRow class="ion-justify-content-between">
                      <IonRow
                        style={{
                          paddingBottom: 0,
                        }}
                        class="ion-justify-content-between ion-align-items-center ion-padding"
                      >
                        <IonAvatar style={{ height: 20, width: 20 }}>
                          <img
                            alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                          />
                        </IonAvatar>
                        <p>some</p>
                        <p>some</p>
                      </IonRow>
                      <IonRow
                        style={{
                          paddingBottom: 0,
                        }}
                        class="ion-align-items-center ion-padding"
                      >
                        <IonIcon icon={saveSharp} />
                      </IonRow>
                    </IonRow>
                  </IonCard>
                </IonCol>
              );
            })
          : news.map((data: any, index: any) => {
              return (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="4"
                  sizeLg="4"
                  sizeXl="2"
                >
                  <IonCard className={styles.cards}>
                    <img
                      alt="Silhouette of mountains"
                      className={styles.image}
                      src={data.image}
                    />
                    <IonCardHeader>
                      <IonCardTitle className={styles.header}>
                        {data.title}
                      </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent className={styles.shortSummary}>
                      {data.shortSummary}
                    </IonCardContent>
                    <IonRow
                      // class="ion-justify-content-between"
                      className={styles.cardFooter}
                    >
                      <IonRow
                        style={{
                          paddingBottom: 0,
                          width: "86%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        // class="ion-justify-content-between ion-align-items-center ion-padding"
                      >
                        <IonAvatar
                          style={{ height: 20, width: 20, alignSelf: "center" }}
                        >
                          <img
                            alt="Silhouette of a person's head"
                            src={channels[data.source]?.image}
                          />
                        </IonAvatar>
                        <p className={styles.channelName}>
                          {channels[data?.source]?.name}
                        </p>
                        <p className={styles.channelName}>
                          {moment(data?.updatedAt).fromNow()}
                        </p>
                      </IonRow>
                      <IonRow
                        style={{
                          paddingBottom: 0,
                        }}
                        // class="ion-align-items-center ion-padding"
                      >
                        <IonIcon icon={saveSharp} />
                      </IonRow>
                    </IonRow>
                  </IonCard>
                </IonCol>
              );
            })}
      </IonRow>
    </IonGrid>
  );
};

export default CardsContainer;

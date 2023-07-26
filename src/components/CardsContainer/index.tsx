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

const CardsContainer: React.FC = ({ news }: any) => {
  console.log("cards com", news);
  const channels = useSelector((state: reducerState) => state.app?.channels);

  let cards = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <IonGrid>
      <IonRow>
        {news == null
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
                  <IonCard>
                    <img alt="Silhouette of mountains" src={data.image} />
                    <IonCardHeader>
                      <IonCardTitle>{data.title}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>{data.shortSummary}</IonCardContent>
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
                            src={channels[data.source]?.image}
                          />
                        </IonAvatar>
                        <p>{channels[data?.source]?.name}</p>
                        <p>{moment(data?.updatedAt).fromNow()}</p>
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
            })}
      </IonRow>
    </IonGrid>
  );
};

export default CardsContainer;

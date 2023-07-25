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

const CardsContainer: React.FC = () => {
  let cards = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <IonGrid>
      <IonRow>
        {cards.map((data, index) => {
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
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
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
        })}
      </IonRow>
    </IonGrid>
  );
};

export default CardsContainer;

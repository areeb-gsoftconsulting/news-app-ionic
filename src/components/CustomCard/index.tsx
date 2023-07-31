import {
  IonCard,
  IonCardContent,
  IonImg,
  IonItem,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";

const Card: React.FC = ({ name, logo }: any) => {
  return (
    <IonCard>
      <IonRow class="ion-align-items-center">
        <IonImg
          style={{ height: 100, width: 100 }}
          src={logo}
          alt="newspapers logo"
        />
        <IonTitle>{name}</IonTitle>
      </IonRow>
    </IonCard>
  );
};
export default Card;

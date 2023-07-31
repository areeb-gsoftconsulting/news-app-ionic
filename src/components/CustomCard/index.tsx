import { IonCard, IonCardContent, IonItem } from "@ionic/react";
import React from "react";

const Card: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </IonCardContent>
    </IonCard>
  );
};
export default Card;

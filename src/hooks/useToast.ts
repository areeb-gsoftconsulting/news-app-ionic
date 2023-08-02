import React from "react";
import { IonButton, useIonToast } from "@ionic/react";

export const useToast = () => {
  const [present] = useIonToast();

  const presentToast = (msg: any) => {
    present({
      message: msg,
      duration: 1500,
      position: "bottom",
    });
  };
  return { presentToast };
};

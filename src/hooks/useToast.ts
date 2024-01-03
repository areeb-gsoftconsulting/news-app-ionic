/** @format */

import React, { useEffect } from "react";
import { useIonToast } from "@ionic/react";

export const useToast = () => {
  const [present] = useIonToast();

  const presentToast = (msg: any) => {
    present({
      message: msg || "Something went wrong!",
      duration: 50,
      position: "bottom",
    });
  };
  return { presentToast };
};

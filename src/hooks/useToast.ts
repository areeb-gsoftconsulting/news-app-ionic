/** @format */

import React, { useEffect } from "react";
import { useIonToast } from "@ionic/react";

export const useToast = () => {
  const [present] = useIonToast();

  const presentToast = (msg: any, duration = 0) => {
    present({
      message: msg || "Something went wrong!",
      duration: duration || 1000,
      position: "bottom",
    });
  };
  return { presentToast };
};

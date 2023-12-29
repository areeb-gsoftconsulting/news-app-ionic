/** @format */

import { IonButtons, IonRippleEffect } from "@ionic/react";
import styles from "./styles.module.css";
import { HTMLAttributes } from "react";
type Props = {
  effectType?: "circle" | "rounded-rectangle" | "rectangle";
} & HTMLAttributes<HTMLIonButtonsElement>;
export const RippleIonButton = (props: Props) => {
  const { children, effectType = "circle", className } = props;

  return (
    <>
      {effectType == "rectangle" && (
        <div
          className={`${styles["ion-activatable"]} ${styles["ripple-parent"]} ${styles["rectangle"]} ${className}`}>
          <IonRippleEffect>
            <IonButtons {...props}>{children}</IonButtons>
          </IonRippleEffect>
        </div>
      )}

      {effectType == "rounded-rectangle" && (
        <div
          className={`${styles["ion-activatable"]} ${styles["ripple-parent"]} ${styles["rounded-rectangle"]} ${className}`}>
          <IonRippleEffect>
            <IonButtons>{children}</IonButtons>
          </IonRippleEffect>
        </div>
      )}

      {effectType == "circle" && (
        <div
          className={`${styles["ion-activatable"]} ${styles["ripple-parent"]} ${styles["rectangle"]} ${className}`}>
          <IonRippleEffect style={{ display: "flex" }}>
            <IonButtons>{children}</IonButtons>
          </IonRippleEffect>
        </div>
      )}
    </>
  );
};

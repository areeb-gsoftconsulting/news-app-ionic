import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonImg,
  IonMenuToggle,
  IonSegmentButton,
  IonLabel,
  IonSegment,
} from "@ionic/react";
import styles from "./header.module.css";
import { refreshSharp } from "ionicons/icons";
import logo from "../../images/HeaderIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { onSelectTab } from "../../store/slice/appSlice";

interface ContainerProps {}

const HeaderWithoutTabs: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar class={styles.toolbar} mode="ios">
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonImg className={styles.headerlogo} src={logo} />
        <IonButtons slot="end">
          <IonIcon icon={refreshSharp}></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderWithoutTabs;
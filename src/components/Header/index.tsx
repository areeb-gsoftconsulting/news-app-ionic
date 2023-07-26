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
import { useSelector } from "react-redux";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  const tabs = useSelector((state: any) => state.app?.tabs);

  console.log({ tabs });
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
      {/* /categories */}
      <IonToolbar>
        <IonSegment scrollable value={tabs[0]?.key}>
          {tabs.map((data: any, index: any) => (
            <IonSegmentButton key={index} value={data.key}>
              <IonLabel>{data?.title}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

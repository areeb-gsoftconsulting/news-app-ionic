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
import dunyaLogo from "../../images/dunya.jpeg";
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
        <IonSegment scrollable value="all">
          {tabs.map((data: any, index: any) => (
            <IonSegmentButton key={index} value={data.key}>
              <IonLabel>{data?.title}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonToolbar>
      {/* /channels */}
      <IonToolbar>
        <IonSegment scrollable value="all">
          <IonSegmentButton value="faoites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="fa3voites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="fav4oites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="favo5ites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="fav56oites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="f55avoites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="favo6ites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
          <IonSegmentButton value="favo77ites">
            <IonImg className={styles.channelLogos} src={dunyaLogo} />
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

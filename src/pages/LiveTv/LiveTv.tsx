import { IonContent, IonPage, IonText } from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import Card from "../../components/CustomCard";
import HeaderWithoutTabs from "../../components/Header/Header";

const LiveTv: React.FC = () => {
  return (
    <IonPage>
      <MenuComponent />
      <IonPage id="main-content">
        <HeaderWithoutTabs />
        <IonContent fullscreen>
          {/* /channels */}
          <IonText>i am TV</IonText>
          <Card />
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default LiveTv;

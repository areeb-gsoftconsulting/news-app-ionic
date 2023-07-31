import { IonContent, IonPage, IonText } from "@ionic/react";
import Header from "../../components/Header";
import MenuComponent from "../../components/MenuComponent";

const LiveTv: React.FC = () => {
  return (
    <IonPage>
      <MenuComponent />
      <IonPage id="main-content">
        <Header />
        <IonContent fullscreen>
          {/* /channels */}
          <IonText>i am TV</IonText>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default LiveTv;

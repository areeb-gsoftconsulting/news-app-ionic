import { IonContent, IonPage, IonText } from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import Card from "../../components/CustomCard";
import HeaderWithoutTabs from "../../components/Header/Header";
import Iframe from "react-iframe";

const LiveTv: React.FC = () => {
  return (
    <IonPage>
      <MenuComponent />
      <IonPage id="main-content">
        <HeaderWithoutTabs />
        <IonContent fullscreen>
          <div style={{ width: 700, margin: "0 auto" }}>
            <Iframe
              url="https://dunyanews.tv/live/"
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>

          <Card />
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default LiveTv;

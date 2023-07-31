import { IonContent, IonPage, IonText } from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import Card from "../../components/CustomCard";
import HeaderWithoutTabs from "../../components/Header/Header";

const NewsPapers: React.FC = () => {
  return (
    <IonPage>
      <MenuComponent />
      <IonPage id="main-content">
        <HeaderWithoutTabs />
        <IonContent fullscreen>
          {/* /channels */}
          <IonText>i am NewsPapers</IonText>
          <Card />
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default NewsPapers;

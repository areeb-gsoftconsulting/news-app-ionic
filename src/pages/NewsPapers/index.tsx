import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import Card from "../../components/CustomCard";
import HeaderWithoutTabs from "../../components/Header/Header";
import { papers } from "./data";

const NewsPapers: React.FC = () => {
  return (
    <IonPage>
      <MenuComponent />
      <IonPage id="main-content">
        <HeaderWithoutTabs />
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              {papers.map((data: any, index: any) => (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="6"
                  sizeLg="6"
                  sizeXl="6"
                >
                  <Card name={data.name} logo={data.logo} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default NewsPapers;

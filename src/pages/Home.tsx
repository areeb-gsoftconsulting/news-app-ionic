import { IonPage } from "@ionic/react";
import "./Home.css";
import MenuComp from "../components/Menu";
import NewsDetailsModal from "../components/NewsDetails";

const Home: React.FC = () => {
  return (
    <IonPage>
      <MenuComp />
    </IonPage>
  );
};

export default Home;

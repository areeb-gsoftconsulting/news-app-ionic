import { IonPage } from "@ionic/react";
import "./Home.css";
import MenuComp from "../components/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: React.FC = () => {
  return (
    <IonPage>
      <MenuComp />
    </IonPage>
  );
};

export default Home;

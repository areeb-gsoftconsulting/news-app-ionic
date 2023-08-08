import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeSharp, tvSharp, newspaperSharp, saveSharp } from "ionicons/icons";
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import Header from "../Header";
import MenuComp from "../Menu";
import LiveTv from "../../pages/LiveTv/LiveTv";
import NewsPapers from "../../pages/NewsPapers";
import SavedNews from "../../pages/SavedNews";
import NewsPaperView from "../NewspaperView";
import MenuComponent from "../MenuComponent";
import { useSelector } from "react-redux";
import NewsDetailsModal from "../NewsDetails";
import { PushNotifications } from "@capacitor/push-notifications";

const BottomTabs: React.FC = () => {
  const data = useSelector((state: any) => state.app.newsDetails);

  /////
  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();
    console.log({ permStatus });

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }

    //
    try {
      let token = await PushNotifications.register();
      console.log({ token });
      PushNotifications.addListener("registration", (token: any) => {
        console.log(token, "Push registration success");
      });
    } catch (error) {
      PushNotifications.addListener("registrationError", (error: any) => {
        alert("Error on registration: " + JSON.stringify(error));
      });
    }

    // Some issue with our setup and push will not work
  };

  useEffect(() => {
    registerNotifications();
  }, []);
  /////

  return (
    <IonReactRouter>
      <MenuComponent />
      {data?.length > 0 && <NewsDetailsModal />}

      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <MenuComp />} exact={true} />
          <Route path="/liveTv" render={() => <LiveTv />} exact={true} />
          <Route
            path="/newspapers"
            render={() => <NewsPapers />}
            exact={true}
          />
          <Route path="/newspapers/:id" render={() => <NewsPaperView />} />
          <Route path="/saved" render={() => <SavedNews />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>ہوم پیج</IonLabel>
          </IonTabButton>

          <IonTabButton tab="liveTv" href="/liveTv">
            <IonIcon icon={tvSharp} />
            <IonLabel>لائیو ٹی وی</IonLabel>
          </IonTabButton>

          <IonTabButton tab="newspapers" href="/newspapers">
            <IonIcon icon={newspaperSharp} />
            <IonLabel>اخبارات</IonLabel>
          </IonTabButton>

          <IonTabButton tab="saved" href="/saved">
            <IonIcon icon={saveSharp} />
            <IonLabel>محفوظ خبریں</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default BottomTabs;

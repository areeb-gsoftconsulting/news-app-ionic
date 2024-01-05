/** @format */

import { Share } from "@capacitor/share";
import { isPlatform } from "@ionic/react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { App, URLOpenListenerEvent } from "@capacitor/app";

export const useDeeplinking = async () => {
  console.log("useDeeplinking is called");

  const history = useHistory();
  useEffect(() => {
    App.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      // Example url: https://beerswift.app/tabs/tab2
      // slug = /tabs/tab2
      const slug = event.url.split(".app").pop();
      console.log("event.url==>", event?.url);

      history.push("/detailnews/65955a1878127ba14144c273");

      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  return null;
};
export const shareNewsLink = async (
  deepLinkTitle = "",
  deepLinkMessage = "",
  deepLinkUrl = ""
) => {
  // dispatch(onNewsDtail([news]));
  // history.push(`/detailnews/${id}`);
  // const deepLinkUrl2 = `https://urdunews.com/detailnews/${id}`; // Replace with your deep
  // create share feature here...
  try {
    // Check if the platform is ready
    // const deepLinkUrl = "https://ionicframework.com/docs";
    // const deepLinkTitle = "See cool stuff";
    // const deepLinkMessage = "Really awesome thing you need to see right meow";

    if (isPlatform("android")) {
      await Share.share({
        title: deepLinkTitle,
        text: deepLinkMessage,
        url: deepLinkUrl,
        dialogTitle: "Share with buddies",
      });
    } else {
      // if (navigator?.canShare && navigator?.canShare())
      navigator
        ?.share({
          title: deepLinkTitle,
          text: deepLinkMessage,
          url: deepLinkUrl,
        })
        .then(function () {
          console.log("Successful share");
        })
        .catch(function (error) {
          // presentToast("Error sharing:" + error);
          console.log("Error sharing:", error);
        });
    }
  } catch (error) {
    // presentToast("Error while sharing");
    console.log("error", error);
  }
};

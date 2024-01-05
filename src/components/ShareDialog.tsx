/** @format */

import { IonIcon, isPlatform } from "@ionic/react";
import { RWebShare } from "react-web-share";
import { useToast } from "../hooks/useToast";
import { Share } from "@capacitor/share";

interface Props {
  message: string;
  url: string;
  title: string;
  shareIcon?: any;
  children: any;
}
export const ShareDialog = ({
  message,
  title,
  shareIcon,
  url,
  children,
}: Props) => {
  const { presentToast } = useToast();

  const shareNews = async () => {
    console.log(" shareNews called");

    // dispatch(onNewsDtail([news]));
    // history.push(`/detailnews/${id}`);
    // const deepLinkUrl2 = `https://urdunews.com/detailnews/${id}`; // Replace with your deep
    // create share feature here...
    try {
      // Check if the platform is ready
      const deepLinkUrl = "https://ionicframework.com/docs";
      const deepLinkTitle = "See cool stuff";
      const deepLinkMessage = "Really awesome thing you need to see right meow";

      await Share.share({
        title: deepLinkTitle,
        text: deepLinkMessage,
        url: deepLinkUrl,
        dialogTitle: "Share with buddies",
      })
        .then(function () {
          console.log("Successful share");
        })
        .catch(function (error) {
          presentToast(error?.message);
          console.log("Error sharing:", error);
        });
    } catch (error) {
      console.log("error", error?.message);
      if (error?.message == "Share canceled") {
        // presentToast(error?.message);
      } else {
        presentToast("Error while sharing");
      }
    }
  };

  const onSuccess = (res) => {
    console.log("Shared successfully on", { res });
    if (res == "copy") presentToast("Link copied to clipboard");
    else presentToast("Shared successfully on " + res);
  };

  return (
    <>
      {isPlatform("android") || isPlatform("ios") ? (
        <p onClick={shareNews}>{children}</p>
      ) : (
        <RWebShare
          data={{
            text: message,
            url,
            title: "",
          }}
          onClick={onSuccess}
          sites={[
            "facebook",
            "twitter",
            "linkedin",
            "whatsapp",
            "telegram",
            "reddit",
            "copy",
          ]}
          closeText="Cancel">
          {children ? children : <button>Share</button>}
        </RWebShare>
      )}
    </>
  );
};

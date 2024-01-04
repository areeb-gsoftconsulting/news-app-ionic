/** @format */

import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import {
  saveSharp,
  saveOutline,
  shareOutline,
  shareSocialOutline,
} from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import styles from "./cards.module.css";
import { onExpandNews, onNewsDtail } from "../../store/slice/appSlice";
import { saveNewsResponse } from "../../store/slice/userSlice";
import { useToast } from "../../hooks/useToast";
import noImage from "../../images/no-image.png";
import { isPlatform } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Share } from "@capacitor/share";
import { shareNewsLink } from "../../hooks/useDeeplinking";
import { RWebShare } from "react-web-share";
import { ShareDialog } from "../ShareDialog";

const NewsCard = ({
  news,
  loader,
  image,
  title,
  channelLogo,
  shortSummary,
  time,
  id,
  //   isNewsSaved,
  channelName,
  link,
}: any) => {
  //   const channels = useSelector((state: reducerState) => state.app?.channels);
  const dispatch = useDispatch();
  const { presentToast } = useToast();
  const [imageError, setImageError] = useState(false);
  const [expand, setExpand] = useState(false);
  const history = useHistory();
  const handleImageError = () => {
    setImageError(true);
  };

  const saveNews = useSelector((state: reducerState) => state.user?.saveNews);
  let isNewsSaved = saveNews.find((data) => data._id == news._id);

  const saveTheNews = () => {
    let index = saveNews.findIndex((data) => data._id == news._id);
    if (index != -1) {
      let data = saveNews.filter((data) => data._id != news._id);
      console.log({ data });
      presentToast("News unsaved");
      dispatch(saveNewsResponse({ news: data }));

      return;
    }
    presentToast("News Saved");

    dispatch(saveNewsResponse({ news: [news, ...saveNews] }));
  };

  const shareNews = async () => {
    console.log("id", id);

    // dispatch(onNewsDtail([news]));
    // history.push(`/detailnews/${id}`);
    // const deepLinkUrl2 = `https://urdunews.com/detailnews/${id}`; // Replace with your deep
    // create share feature here...
    try {
      // Check if the platform is ready
      const deepLinkUrl = "https://ionicframework.com/docs";
      const deepLinkTitle = "See cool stuff";
      const deepLinkMessage = "Really awesome thing you need to see right meow";
      // shareNewsLink(deepLinkTitle, deepLinkMessage, deepLinkUrl);

      if (isPlatform("android") || isPlatform("ios")) {
        await Share.share({
          title: deepLinkTitle,
          text: deepLinkMessage,
          url: deepLinkUrl,
          dialogTitle: "Share with buddies",
        });
      } else {
        if (navigator?.canShare && navigator?.canShare()) {
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
        } else {
          // code for web
        }
      }
    } catch (error) {
      presentToast("Error while sharing");
      console.log("error", error);
    }
  };
  return (
    <IonCard className={expand ? styles.cardsMobile : styles.cards}>
      <img
        onClick={() => {
          if (isPlatform("mobile")) {
            setExpand(!expand);
          } else {
            dispatch(onExpandNews([news]));
          }
        }}
        alt="Silhouette of mountains"
        className={styles.image}
        onError={handleImageError}
        src={!imageError ? image : noImage}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}>
        <IonCardHeader>
          <IonCardTitle className={styles.header}>{title}</IonCardTitle>
        </IonCardHeader>

        {expand ? (
          <p
            style={{
              textAlign: "end",
              fontFamily: "urduFont",
              paddingLeft: "5px",
              paddingRight: "5px",
              fontSize: "10px",
            }}>
            {news.summary}
            <button
              style={{ color: "green", backgroundColor: "white" }}
              onClick={() => history.push("/newswebdetail", { id: link })}>
              {"تفصیل دیکھیں"}
            </button>
          </p>
        ) : (
          <IonCardContent className={styles.shortSummary}>
            {shortSummary}
          </IonCardContent>
        )}
        {/* <IonButton className={styles.detailButton}>{"تفصیل دیکھیں"}</IonButton> */}
        <IonRow
          // class="ion-justify-content-between"
          className={styles.cardFooter}>
          <IonRow
            style={{
              paddingBottom: 4,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              flexWrap: "nowrap",
            }}
            // class="ion-justify-content-between ion-align-items-center ion-padding"
          >
            <IonAvatar
              style={{
                height: 20,
                width: 20,
                alignSelf: "center",
                marginRight: "5px",
              }}>
              <img alt="Silhouette of a person's head" src={channelLogo} />
            </IonAvatar>
            <p className={styles.channelName}>{channelName}</p>
            <p className={styles.channelName}>{time}</p>
          </IonRow>

          <ShareDialog
            message={title || shortSummary || ""}
            url={id ? `http://localhost:8100/detailnews/${id}` : ""}
            title={title || shortSummary || ""}>
            <IonIcon
              style={{
                paddingBottom: 2,
                marginRight: 10,
              }}
              icon={shareSocialOutline}
            />
          </ShareDialog>

          <IonRow
            style={{
              paddingBottom: 2,
            }}
            // class="ion-align-items-center ion-padding"
          >
            <IonIcon
              onClick={saveTheNews}
              icon={isNewsSaved ? saveSharp : saveOutline}
            />
          </IonRow>
        </IonRow>
      </div>
    </IonCard>
  );
};

export default NewsCard;

/** @format */

import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import { saveSharp, saveOutline, shareSocialOutline } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import styles from "./cards.module.css";
import { onExpandNews } from "../../store/slice/appSlice";
import { saveNewsResponse } from "../../store/slice/userSlice";
import { useToast } from "../../hooks/useToast";
import noImage from "../../images/no-image.png";
import { isPlatform } from "@ionic/react";
import { useHistory } from "react-router-dom";
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
  let isNewsSaved = saveNews.find((item) => item?._id == news?._id);

  const saveTheNews = () => {
    let index = saveNews.findIndex((item) => item?._id == news?._id);
    if (index != -1) {
      let data = saveNews.filter((item) => item?._id != news?._id);
      // console.log({ data });
      presentToast("News unsaved");
      dispatch(saveNewsResponse({ news: data }));

      return;
    }
    presentToast("News Saved");

    dispatch(saveNewsResponse({ news: [news, ...saveNews] }));
  };

  // if (true) {
  if (loader) {
    return <NewsCardShimmar />;
  }
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
            {news?.summary}
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
              className={styles.ionIcon}
              style={{
                marginRight: 10,
              }}
              icon={shareSocialOutline}
            />
          </ShareDialog>

          <IonIcon
            className={`${styles.ionIcon} ${
              isPlatform("ios") ? styles.ionIosIconSave : ""
            }`}
            onClick={saveTheNews}
            icon={isNewsSaved ? saveSharp : saveOutline}
          />
        </IonRow>
      </div>
    </IonCard>
  );
};

export default NewsCard;

const NewsCardShimmar = () => {
  return (
    <IonCard className={styles.cards}>
      <div className={`${styles.image} ${styles.imageShimmer}`}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "55%",
          justifyContent: "space-around",
        }}>
        <IonCardTitle className={styles.headerTitleShimmer} />

        <IonCardTitle
          className={`${styles.headerTitleShimmer} ${styles.shortSummaryShimmer}`}
        />

        <IonRow className={styles.cardFooterShimmer}>
          <IonRow>
            <div className={styles.channelIconShimmer} />
            <div className={styles.channelNameShimmer} />
          </IonRow>
          <IonRow>
            <div
              className={styles.channelIconShimmer}
              style={{ marginRight: 5 }}
            />
            <div className={styles.channelIconShimmer} />
          </IonRow>
        </IonRow>
      </div>
    </IonCard>
  );
};

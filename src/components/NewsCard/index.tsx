import {
  IonAvatar,
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
import { saveSharp, saveOutline } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import moment from "moment";
import styles from "./cards.module.css";
import { onExpandNews } from "../../store/slice/appSlice";
import { saveNewsResponse } from "../../store/slice/userSlice";
import { useToast } from "../../hooks/useToast";
import noImage from "../../images/no-image.png";
const NewsCard = ({
  news,
  loader,
  image,
  title,
  channelLogo,
  shortSummary,
  time,
  //   isNewsSaved,
  channelName,
}: any) => {
  //   const channels = useSelector((state: reducerState) => state.app?.channels);
  const dispatch = useDispatch();
  const { presentToast } = useToast();
  const [imageError, setImageError] = useState(false);

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
  return (
    <IonCard className={styles.cards}>
      <img
        onClick={() => {
          console.log("567890dispatch(onExpandNews([data]))");
          dispatch(onExpandNews([news]));
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
        }}
      >
        <IonCardHeader>
          <IonCardTitle className={styles.header}>{title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent className={styles.shortSummary}>
          {shortSummary}
        </IonCardContent>
        <IonRow
          // class="ion-justify-content-between"
          className={styles.cardFooter}
        >
          <IonRow
            style={{
              paddingBottom: 0,
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
            }}
            // class="ion-justify-content-between ion-align-items-center ion-padding"
          >
            <IonAvatar style={{ height: 20, width: 20, alignSelf: "center" }}>
              <img alt="Silhouette of a person's head" src={channelLogo} />
            </IonAvatar>
            <p className={styles.channelName}>{channelName}</p>
            <p className={styles.channelName}>{time}</p>
          </IonRow>
          <IonRow
            style={{
              paddingBottom: 0,
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

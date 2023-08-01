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
import NewsCard from "../NewsCard";

const CardsContainer: React.FC = ({ news, loader }: any) => {
  const channels = useSelector((state: reducerState) => state.app?.channels);
  const dispatch = useDispatch();
  let cards = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  const saveNews = useSelector((state: reducerState) => state.user?.saveNews);
  const [isNewsSaved, setIsNewsSaved] = useState(false);

  console.log({ isNewsSaved });

  useEffect(() => {
    checkNewsSaved(); // checkNewsFollow();
  }, [saveNews]);
  const checkNewsSaved = useCallback(async () => {
    if (saveNews?.length == 0) {
      return;
    }
    let index = saveNews.findIndex((data) => data._id == news._id);
    setIsNewsSaved(index != -1);
  }, [saveNews, news]);

  const saveTheNews = (news: any) => {
    let index = saveNews.findIndex((data) => data._id == news._id);
    if (index != -1) {
      let data = saveNews.filter((data) => data._id != news._id);
      setIsNewsSaved(false);
      dispatch(saveNewsResponse({ news: data }));

      return;
    }
    setIsNewsSaved(true);
    dispatch(saveNewsResponse({ news: [news, ...saveNews] }));
  };
  return (
    <IonGrid>
      <IonRow>
        {loader == true || news == null
          ? cards.map((data, index) => {
              return (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="4"
                  sizeLg="4"
                  sizeXl="2"
                >
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>Card Title</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Here's a small text description for the card content.
                      Nothing more, nothing less.
                    </IonCardContent>
                    <IonRow class="ion-justify-content-between">
                      <IonRow
                        style={{
                          paddingBottom: 0,
                        }}
                        class="ion-justify-content-between ion-align-items-center ion-padding"
                      >
                        <IonAvatar style={{ height: 20, width: 20 }}>
                          <img
                            alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                          />
                        </IonAvatar>
                        <p>some</p>
                        <p>some</p>
                      </IonRow>
                      <IonRow
                        style={{
                          paddingBottom: 0,
                        }}
                        class="ion-align-items-center ion-padding"
                      >
                        <IonIcon icon={saveSharp} />
                      </IonRow>
                    </IonRow>
                  </IonCard>
                </IonCol>
              );
            })
          : news.map((data: any, index: any) => {
              return (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="4"
                  sizeLg="4"
                  sizeXl="2"
                >
                  <NewsCard
                    image={data.image}
                    title={data.title}
                    channelLogo={channels[data.source]?.image}
                    shortSummary={data.shortSummary}
                    time={moment(data?.updatedAt).fromNow()}
                    isNewsSaved={isNewsSaved}
                    channelName={channels[data?.source]?.name}
                    news={data}
                  />
                </IonCol>
              );
            })}
      </IonRow>
    </IonGrid>
  );
};

export default CardsContainer;

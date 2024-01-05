/** @format */

import React, { memo, useDeferredValue, useEffect, useState } from "react";
AbortSignal;
import HeaderWithoutTabs from "../../components/Header/Header";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import noImage from "../../images/no-image.png";
import {
  save,
  saveOutline,
  shareSocialOutline,
  logoFacebook,
  logoTwitter,
  saveSharp,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import getNewsDetail from "../../services/getNewsDetail";
import { useToast } from "../../hooks/useToast";
import { ShareDialog } from "../../components/ShareDialog";
import { reducerState } from "../../models/types";
import { saveNewsResponse } from "../../store/slice/userSlice";

const DetailNews: React.FC = () => {
  const [data, setData] = useState(null);
  const { presentToast } = useToast();
  const [imageError, setImageError] = useState(false);
  const { id } = useParams<{ id: string }>();
  const saveNews = useSelector((state: reducerState) => state.user?.saveNews);
  let isNewsSaved = saveNews?.find((data) => data._id == id);
  const dispatch = useDispatch();

  // console.log("id", id);
  const handleImageError = () => {
    setImageError(true);
  };

  const getNewsDetailsMethod = async () => {
    try {
      const response = await getNewsDetail(id);
      // console.log("response", response?.data);
      if (response?.data) {
        setData(response?.data);
      } else {
        console.log("error to call api");
        presentToast(response?.error || "");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    if (id) {
      getNewsDetailsMethod();
    }
  }, [id]);

  const saveTheNews = () => {
    let index = saveNews.findIndex((item) => item._id == data?._id);
    if (index != -1) {
      let savedNews = saveNews.filter((item) => item._id != data?._id);
      // console.log({ data });
      presentToast("News unsaved");
      dispatch(saveNewsResponse({ news: savedNews }));

      return;
    }
    presentToast("News Saved");

    dispatch(saveNewsResponse({ news: [data, ...saveNews] }));
  };

  const shareTo = (value) => () => {
    let url = `http://localhost:8100/detailnews/${id}`;
    let url2 = `https://ionicframework.com/docs/intro/cdn`;
    let message = data?.title || data?.summary || "";

    if (value == "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url2}`,
        "_blank"
      );
    } else if ("twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${message}&url=${url2}`,
        "_blank"
      );
    }
  };
  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent>
        <div style={{ padding: 20 }}>
          <IonImg
            style={{ height: 300 }}
            onError={handleImageError}
            src={!imageError ? data?.image : noImage}
          />
          <IonTitle
            style={{
              textAlign: "center",
              fontFamily: "urduFont",
            }}>
            {data?.title}
          </IonTitle>
          <p
            style={{
              textAlign: "end",
              fontFamily: "urduFont",
            }}>
            {data?.summary}
          </p>
        </div>
        <IonToolbar style={{}}>
          <IonButtons>
            <IonButton onClick={shareTo("twitter")}>
              <IonIcon icon={logoTwitter} />
            </IonButton>

            <IonButton onClick={shareTo("facebook")}>
              <IonIcon icon={logoFacebook} />
            </IonButton>

            <ShareDialog
              message={data?.title || data?.summary || ""}
              url={id ? `http://localhost:8100/detailnews/${id}` : ""}
              title={data?.title || data?.summary || ""}>
              <IonButton>
                <IonIcon icon={shareSocialOutline} />
              </IonButton>
            </ShareDialog>
            <IonButton onClick={saveTheNews}>
              <IonIcon icon={isNewsSaved ? saveSharp : saveOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default memo(DetailNews);

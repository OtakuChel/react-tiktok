import { MusicNote } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import { useFeed } from "../../hooks/useFeed";

import VideoUser from "../Videos/VideoUser/VideoUser";
import VideoDetails from "../Videos/VideoDetails/VideoDetails";
import Spinner from "../Spinner/Spinner";
import Video from "../Videos/Video/Video";

import styles from "./Feed.module.scss";

import videosArray from "../../utils/arrs.json";

const Feed: React.FC = () => {
  // const { data: feed, isLoading }: any = useFeed();

  //test consts
  const isLoading = false;
  console.log(videosArray, "videosArray");
  const feed = {
    data: videosArray,
  };

  // if (isLoading) {
  //   return <p>Загрузка...</p>;
  // }

  return !isLoading ? (
    <div className="feed">
      {feed.data.map(
        ({
          video_id: videoId,
          title,
          play,
          music_info: { title: songTitle },
          play_count: playCount,
          digg_count: diggCount,
          comment_count: commentCount,
          share_count: shareCount,
          author: { unique_id: uniqueId, avatar, nickname },
        }: any) => {
          console.log(avatar);
          return (
            <div className={styles.video} key={videoId}>
              <div className={styles.videoWrapper}>
                <Video
                  url={play}
                  videoId={videoId}
                  songTitle={songTitle}
                  title={title}
                />
                <VideoDetails
                  playCount={playCount}
                  diggCount={diggCount}
                  commentCount={commentCount}
                  shareCount={shareCount}
                  uniqueId={uniqueId}
                  nickname={nickname}
                  avatar={avatar}
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default Feed;

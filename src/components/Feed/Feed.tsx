import { MusicNote } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import { useFeed } from "../../hooks/useFeed";

import VideoUser from "../Videos/VideoUser/VideoUser";
import VideoDetails from "../Videos/VideoDetails/VideoDetails";
import Spinner from "../Spinner/Spinner";
import Video from "../Videos/Video/Video";

import videosArray from "../../utils/arrs.json";
const Feed: React.FC = () => {
  // const { data: feed, isLoading }: any = useFeed();
  // const { data: feed, isLoading }: any = videosArray;

  console.log(videosArray, "videosArray");
  // console.log(feed.data, "feed");

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
          return (
            <div className="video" key={videoId}>
              <VideoUser
                uniqueId={uniqueId}
                nickname={nickname}
                avatar={avatar}
              />
              <div className="video-wrapper">
                <Video url={play} videoId={videoId} />
                <VideoDetails
                  playCount={playCount}
                  diggCount={diggCount}
                  commentCount={commentCount}
                  shareCount={shareCount}
                />
              </div>
              <div className="video-music">
                <span>Original: </span>
                <MusicNote />
                <p className="video-music__title">{songTitle}</p>
              </div>
              <div className="video_title">{title}</div>
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

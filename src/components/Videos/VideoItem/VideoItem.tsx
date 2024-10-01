import React from "react";
import VideoUser from "../VideoUser/VideoUser";
import Video from "../Video/Video";

import styles from "./VideoItem.module.scss";

type TAuthor = {
  uniqueId: string;
  nickname: string;
  avatar: string;
};
interface IVideoItemProps {
  video_id: string;
  title: string;
  play: string;
  author: TAuthor;
  songTitle: string;
}
const VideoItem: React.FC<IVideoItemProps> = ({
  video_id: videoId,
  title,
  play,
  author,
  songTitle,
}) => {
  return (
    <div className={styles.videoItem}>
      {/* <VideoUser {...author} /> */}
      <Video url={play} videoId={Number(videoId)} title={title} songTitle={songTitle} />
      <div className="video-title">{title}</div>
    </div>
  );
};

export default VideoItem;

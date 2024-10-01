import React from "react";

import { formatCompactNum } from "../../../utils/common";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

import styles from "./VideoDetails.module.scss";
import VideoUser from "../VideoUser/VideoUser";

type TVideoDetailsProps = {
  playCount: string;
  diggCount: string;
  commentCount: string;
  shareCount: string;
  uniqueId: string;
  nickname: string;
  avatar: string;
};

const VideoDetails: React.FC<TVideoDetailsProps> = ({
  playCount,
  diggCount,
  commentCount,
  shareCount,
  uniqueId,
  nickname,
  avatar,
}) => {
  const details = [
    {
      icon: <PlayArrowIcon />,
      count: playCount,
    },
    {
      icon: <ChatBubbleIcon />,
      count: commentCount,
    },
    {
      icon: <ShareIcon />,
      count: shareCount,
    },
    {
      icon: <FavoriteIcon />,
      count: diggCount,
    },
  ];
  return (
    <ul className={styles.detailsList}>
      <VideoUser uniqueId={uniqueId} nickname={nickname} avatar={avatar} />
      {details.map(({ icon, count }, i) => (
        <li key={i} className={styles.videoDetails}>
          <div className={styles.circleBackground}>{icon}</div>
          <p>{formatCompactNum(Number(count))}</p>
        </li>
      ))}
    </ul>
  );
};

export default VideoDetails;

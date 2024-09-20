import React from "react";

import { formatCompactNum } from "../../utils/common";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

type TVideoDetailsProps = {
  playCount: string;
  diggCount: string;
  commentCount: string;
  shareCount: string;
};

const VideoDetails: React.FC<TVideoDetailsProps> = ({
  playCount,
  diggCount,
  commentCount,
  shareCount,
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
    <ul className="video-details">
      {details.map(({ icon, count }, i) => (
        <li key={i} className="video-details__item">
          {icon}
          <p>{formatCompactNum(Number(count))}</p>
        </li>
      ))}
    </ul>
  );
};

export default VideoDetails;

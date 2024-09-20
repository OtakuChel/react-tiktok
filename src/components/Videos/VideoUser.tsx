import React from "react";
import { Link } from "react-router-dom";

type TVideoUserProps = {
  uniqueId: string;
  nickname: string;
  avatar: string;
};
//: { unique_id: uniqueId, nickname, avatar }
const VideoUser: React.FC<TVideoUserProps> = ({
  uniqueId,
  nickname,
  avatar,
}) => {
  return (
    <Link to={`/user/${uniqueId}`} className="video-autor">
      <div
        className="video-autor__image"
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="video-autor__info">
        <p>{nickname}</p>
        <span>{uniqueId}</span>
      </div>
    </Link>
  );
};

export default VideoUser;

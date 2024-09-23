import React from "react";
import VideoUser from "../VideoUser/VideoUser";
import Video from "../Video/Video";

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
}
const VideoItem: React.FC<IVideoItemProps> = ({
  video_id: videoId,
  title,
  play,
  author,
}) => {
  return (
    <div className="video">
      <VideoUser {...author} />
      <Video url={play} videoId={Number(videoId)} />
      <div className="video-title">{title}</div>
    </div>
  );
};

export default VideoItem;

import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";
import Spinner from "../Spinner/Spinner";

type TVideo = {
  url: string;
  videoId: number;
  width?: string;
  height?: string;
};

type THandleProgressParams = { loaded: number; played: number };

const Video: React.FC<TVideo> = ({
  url,
  videoId,
  width = "100%",
  height = "360px",
}) => {
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);

  const videoRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setPlaying(!isPlaying);

    if (videoRef.current) {
      videoRef.current.classList.toggle("playing");
    }
  };

  const handleProgress = ({ loaded, played }: THandleProgressParams) => {
    if (!loaded) return;
    setProgress(played * 100); // Прогресс воспроизведения в процентах
  };

  return (
    <div ref={videoRef} className={`video-item ${isPlaying ? "playing" : ""}`}>
      {!isReady && (
        <div className="video-item__loading">
          <Spinner />
        </div>
      )}
      <Link to={`video/${videoId}`}>
        <ReactPlayer
          playing={isPlaying}
          loop={true}
          url={url}
          width={width}
          height={height}
          onProgress={handleProgress}
          onReady={() => setIsReady(true)}
        />
      </Link>
      <div className="video-item__controls" onClick={handleClick}>
        {isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
        <div className="video-progres">
          <span style={{ width: `${progress}%` }}></span>
        </div>
      </div>
    </div>
  );
};

export default Video;

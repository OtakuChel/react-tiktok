import { MusicNote } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export const Feed = () => {
  const feed: any[] = [];
  return (
    <div className="feed">
      {feed.map((obj) => (
        <div className="video">
          <Link to="" className="video-autor">
            <div
              className="video-autor__image"
              style={{ backgroundImage: `url()` }}
            />
            <div className="video-autor__info">
              <p>nickname</p>
              <span>ID</span>
            </div>
          </Link>
          <div className="video-wrapper">
            <video src="" loop autoPlay={false} muted={true}></video>
            <ul className="video-details">
              {[].map((el, i) => (
                <li key={i} className="video-details__item">
                  icon
                  <p>text</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="video-music">
            <span>Original: </span>
            <MusicNote/>
            <p className="video-music__title">
                song name
            </p>
          </div>
          <div className="video_title">Video Title</div>
        </div>
      ))}
    </div>
  );
};

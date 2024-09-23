import React from "react";
import { Link } from "react-router-dom";

import styles from './VideoUser.module.scss';

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
    <Link to={`/user/${uniqueId}`} className={styles.authorBlock}>
      <div
        className={styles.authorImage}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className={styles.authorName}>
        <p>{nickname}</p>
        {/* <span>{uniqueId}</span> */}
      </div>
    </Link>
  );
};

export default VideoUser;

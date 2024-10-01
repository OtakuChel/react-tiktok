import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../../hooks/useSearch";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "../../Spinner/Spinner";
import VideoItem from "../../Videos/VideoItem/VideoItem";

import styles from "./SearchFeed.module.scss";

const SearchFeed = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data, isFetching, setParams, fetchNextPage, hasNextPage } =
    useSearch();
  React.useEffect(() => {
    if (query) {
      setParams((__params) => ({ ...__params, keywords: query }));
    }
  }, [query]);

  const videoArray = data?.[0]?.data?.videos || [];

  if (!videoArray.length) {
    return (
      <div className="error-message">
        <h2 className="eroor-message-text">Nothing for {query}</h2>
      </div>
    );
  }
  return (
    <div className={styles.searchСontainer}>
      <InfiniteScroll
        dataLength={videoArray.length}
        scrollThreshold={"600px"}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
      >
        <div className={styles.searchFeed}>
          {videoArray.map((video, index) => {
            return (
              <VideoItem
                key={video.video_id}
                video_id={video.video_id}
                title={video.title}
                play={video.play}
                author={video.author}
                songTitle={video.music_info.title}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      {isFetching && <Spinner />}
    </div>
  );
};

export default SearchFeed;

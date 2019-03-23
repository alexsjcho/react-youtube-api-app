import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return (
    <div className="ui relaxed divided list">
      <h3>VideoList Component</h3>
      <h4>{renderedList}</h4>
    </div>
  );
};

export default VideoList;

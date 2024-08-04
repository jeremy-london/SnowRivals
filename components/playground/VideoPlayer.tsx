"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "https://www.youtube.com/watch?v=GnYAlEt-s00";

  return (
    <div>
      <ReactPlayer url={videosrc} controls={true} light={false} pip={true} />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;

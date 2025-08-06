"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "https://www.youtube.com/watch?v=GnYAlEt-s00";

  return (
    <div>
      <ReactPlayer
        src={videosrc}
        controls={true}
        light={false}
        pip={true}
        style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;

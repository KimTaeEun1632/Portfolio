import React, { useRef, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mainContainer">
      <div className="content">
        <div className="videoWrapper">
          <video
            ref={videoRef}
            src="/videos/배너동영상.mp4"
            className="videoPlay"
            autoPlay
            loop
            muted
          ></video>
          <h1 className="title">FE developer 김태은</h1>
          <span className="subTitle">Email: qpwoal1324@naver.com</span>
          <button className="videoButton" onClick={handlePlayPause}>
            {isPlaying ? (
              <img
                src="./images/pause.png"
                className="playButton"
                alt="일시정지 아이콘"
              ></img>
            ) : (
              <img
                src="./images/play-button.png"
                className="playButton"
                alt="플레이아이콘"
              ></img>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

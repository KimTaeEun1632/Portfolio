import React, { useRef, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true); // 재생 여부를 상태로 관리
  const videoRef = useRef(null); // video 요소에 접근하기 위한 ref

  // 재생/일시정지 토글 함수
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause(); // 일시정지
    } else {
      video.play(); // 재생
    }
    setIsPlaying(!isPlaying); // 재생 상태 업데이트
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
          <h1 className="title">어쩌구 저쩌구</h1>
          <span className="subTitle">qpwoal1324@naver.com</span>

          {/* 버튼에 이벤트 핸들러 연결 */}
          <button className="videoButton" onClick={handlePlayPause}>
            {isPlaying ? (
              "일시정지"
            ) : (
              <img
                src="./images/play.svg"
                className="playButton"
                alt="플레이아이폰"
              ></img>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

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
          <h1 className="title">프론트엔드 개발자 김태은 입니다.</h1>
          <span className="subTitle">qpwoal1324@naver.com</span>

          {/* 버튼에 이벤트 핸들러 연결 */}
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

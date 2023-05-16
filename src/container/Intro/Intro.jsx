import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false); //
  const vidRef = React.useRef(); // Tham chiếu lại giá trị thẻ video
  // Xử lý bật tắt video
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo); // Set lại giá trị = true để bật video
    console.log("2__", playVideo);
    if (playVideo) {
      //
      console.log("aopscpaosc___");
      vidRef.current.pause();
    } else {
      console.log("aopscpaosc___ssss");
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false} // Ko hiển thị nút điều khiển
        muted // Chỉ định xem video được phát âm thanh hay không. Có thuộc tính muted = ko phát âm thanh
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "../assets/videoCarouseImage/image 31.png";
import image2 from "../assets/videoCarouseImage/image 32.png";
import image3 from "../assets/videoCarouseImage/image 33.png";
import image4 from "../assets/videoCarouseImage/image 34.png";

// Sample video data (replace URLs with actual video sources)
const videoData = [
  {
    id: 1,
    url: image1,
    title: "Video 1",
  },
  {
    id: 2,
    url: image2,
    title: "Video 2",
  },
  {
    id: 3,
    url: image3,
    title: "Video 3",
  },
  {
    id: 4,
    url: image4,
    title: "Video 4",
  },
  {
    id: 5,
    url: image1,
    title: "Video 1",
  },
  {
    id: 6,
    url: image2,
    title: "Video 2",
  },
  {
    id: 7,
    url: image3,
    title: "Video 3",
  },
  {
    id: 8,
    url: image4,
    title: "Video 4",
  },
  //   {
  //     id: 5,
  //     url: "https://www.youtube.com/embed/Tn-XvYG9x7w",
  //     title: "Video 5",
  //   },
  //   {
  //     id: 6,
  //     url: "https://www.youtube.com/embed/Tn-XvYG9x7w",
  //     title: "Video 6",
  //   },
];

const VideoPlayerWithSwiper = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const handleThumbnailClick = (video) => {
    console.log("hello mansi");
    setCurrentVideo(videoData[video.id - 1]);
    console.log("video changed to", video.title);
  };

  return (
    <div className=" w-[100%] md:w-[calc(50%)] lg:w-[calc(50%-2rem)] bg-white ">
      {/* main video */}
      <div className="w-[100%]">
        {/* <iframe
          src={currentVideo.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <img src={currentVideo.url} className="w-[100%] h-[213px]" />
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={3}
        navigation={{ clickable: true }}
        loop={true}
        className="my-swiper"
      >
        {videoData.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => handleThumbnailClick(item)}>
              {/* <iframe
                src={item.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-[61px] w-[112px]"
              ></iframe> */}
              <img
                src={item.url}
                className="h-[80px] w-[113px] object-cover mt-3"
              />
            </div>
            <div className="h-6"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoPlayerWithSwiper;

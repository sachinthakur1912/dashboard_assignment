import React from "react";
import profile from "../assets/profile.png";
import profile1 from "../assets/2.jpeg";
import profile2 from "../assets/7.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: profile,
    text: "Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor.....",
  },
  {
    id: 2,
    image: profile1,
    text: "Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor.....",
  },
  {
    id: 3,
    image: profile2,
    text: "Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor.....",
  },
  {
    id: 4,
    image: profile,
    text: "Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor.....",
  },
];

export default function GroupCard() {
  return (
    <div className="w-[100%] md:w-[30%] md:hidden lg:block shadow-lg shadow-black/25 rounded-3xl border border-customBorder bg-white ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 250, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-4 items-center px-5 py-2 ">
              <h1 className="text-lg">Group Coaching Call</h1>
              <div className="flex gap-4 items-center">
                <img src={item.image} className=" rounded-3xl h-[140px] " />
                <p className="text-sm w-[60%]">{item.text}</p>
              </div>
              <div className="w-[50%] py-1 text-center bg-customButton rounded-2xl">
                Join the session
              </div>
              <div className="h-6"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

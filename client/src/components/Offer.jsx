import React from "react";
import image1 from "../assets/image 41.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    title: "Special Partnership Offer",
    image: image1,
    text: "10% OFF in all wellness product",
    link: "www.website.com",
  },
  {
    id: 2,
    title: "Special Partnership Offer",
    image: image1,
    text: "10% OFF in all wellness product",
    link: "www.website.com",
  },
  {
    id: 3,
    title: "Special Partnership Offer",
    image: image1,
    text: "10% OFF in all wellness product",
    link: "www.website.com",
  },
  {
    id: 4,
    title: "Special Partnership Offer",
    image: image1,
    text: "10% OFF in all wellness product",
    link: "www.website.com",
  },
  {
    id: 5,
    title: "Special Partnership Offer",
    image: image1,
    text: "10% OFF in all wellness product",
    link: "www.website.com",
  },
];
export default function Offer() {
  return (
    <div className="w-[100%] lg:w-[calc(50%-2rem)] md:w-[calc(50%-1rem)] bg-white rounded-3xl">
      <Swiper
        modules={[Navigation, Pagination]}
        // spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide
            className="px-8 py-8 border-2 border-dashed rounded-2xl border-customBorder"
            key={item.id}
          >
            <h1 className="font-semibold">{item.title}</h1>
            <div className="flex gap-6 mt-4 flex-row md:flex-col lg:flex-row">
              <img src={item.image} className="flex md:hidden lg:flex" />
              <div className="flex flex-col gap-5 ">
                <p>{item.text}</p>
                <p className="text-blue-700 cursor-pointer">{item.link}</p>
                <div className="mt-10 px-3 py-1 cursor-pointer bg-customProgressBlue text-white w-fit rounded-2xl ">
                  View More
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="h-10"></div>
      </Swiper>
    </div>
  );
}

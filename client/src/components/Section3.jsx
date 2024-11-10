import React from "react";
import player from "../assets/player.png";
import VideoCarousel from "./VideoCarousel";
import Offer from "./Offer";
import ChartCard from "./ChartCard";
export default function Section3() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-16">
      <div className="flex flex-col gap-2 w-[100%] md:w-[30%]">
        <h1 className="text-lg font-semibold">Affirmations</h1>
        <img src={player} />
      </div>
      <div className=" flex flex-col w-[100%] md:w-[calc(70%-4rem)] justify-between">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-lg font-semibold">Wisdom window</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <VideoCarousel />
            <Offer />
          </div>
        </div>
        <div>
          <ChartCard />
        </div>
      </div>
    </div>
  );
}

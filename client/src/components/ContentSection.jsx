import React from "react";
import ActiveCard from "./ActiveCard";
import ProgressCard from "./ProgressCard";
import GroupCard from "./GroupCard";
import sunset from "../assets/sunset 1.png";
import lunch from "../assets/lunch-box 2.png";
import clouds from "../assets/cloudy 1.png";
import Routine from "./Routine";
import Section3 from "./Section3";
import MyCalendar from "./Calendar";

const data = [
  {
    id: 1,
    title: "Morning",
    image: sunset,
    p1: "Guided Meditation",
    p2: "Mindfulness",
    p3: "Alpha",
    p4: "Meditation Music",
    p5: "Theta",
  },
  {
    id: 2,
    title: "After Lunch",
    image: lunch,
    p1: "Guided Meditation",
    p2: "Relax",
    p3: "Beta",
    p4: "Meditation Music",
    p5: "Theta",
  },
  {
    id: 3,
    title: "Bedtime",
    image: clouds,
    p1: "Guided Meditation",
    p2: "Relax",
    p3: "Delta",
    p4: "Meditation Music",
    p5: "Going to sleep",
  },
];

export default function ContentSection() {
  return (
    <div className="px-4 md:px-4 lg:px-16 w-[100%] lg:w-[calc(100%-80px)] flex flex-col gap-12 md:bg-custom-bg bg-no-repeat bg-right-top">
      <div className="flex gap-36 items-center">
        <ActiveCard />
        <div className="hidden lg:flex ml-36 p-5 text-center w-[10%] h-[10vh] bg-customOra text-white items-center justify-center text-lg  rounded-3xl">
          Next Events
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-2 lg:justify-between">
        <ProgressCard />
        <GroupCard />
        <MyCalendar />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-10 items-center ">
          <h1 className="text-lg font-semibold">Routine Suggestion</h1>
          <div className="px-4 py-2 bg-customOra rounded-3xl text-white">
            Make your own routine
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-10 md:justify-between ">
          {data.map((item) => (
            <Routine item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div>
        <Section3 />
      </div>
    </div>
  );
}

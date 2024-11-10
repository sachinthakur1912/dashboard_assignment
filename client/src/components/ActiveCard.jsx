import React from "react";
import blueH from "../assets/blue_headphone.jpg";
import greenH from "../assets/green_headpohnes.png";
import plus from "../assets/PlusCircle.png";
export default function ActiveCard() {
  return (
    <div className="py-4 px-4 md:px-16 flex flex-col gap-3 shadow-xl shadow-black/25 w-[100%] md:w-[80%] lg:w-[38%]">
      <div className="flex gap-5">
        <div className="py-1 px-6  bg-customBlue rounded-3xl text-white w-[45%]">
          Active Users
        </div>
        <div className="py-1 px-6 bg-customGreen rounded-3xl text-white w-[50%] ">
          Available Seats
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1 md:gap-4 px-2 w-1/2">
          <img src={blueH} className="w-[40px]" />
          <p className="text-3xl text-customBlue">320</p>
        </div>
        <div className="flex items-center gap-1  md:gap-4 px-2 w-1/2">
          <img src={greenH} className="w-[40px]" />
          <p className="text-3xl text-customGreen">320</p>
        </div>
        <div className="flex items-end mb-2">
          <img src={plus} className="w-6" />
        </div>
      </div>
    </div>
  );
}

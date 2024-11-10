import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressCard() {
  return (
    <div className="w-[100%] md:w-[50%] lg:w-[30%] flex flex-col gap-5 p-2 bg-white rounded-3xl ">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Completed hours</h1>
        <ProgressBar
          completed={40}
          height="28px"
          bgColor="#583469"
          customLabel="30:25"
          //   baseBgColor:"#FFFFFF"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Most Popular Sessions</h1>
        <div className="flex flex-col gap-6">
          <ProgressBar completed={85} height="28px" bgColor="#AC4A78" />
          <ProgressBar completed={72} height="28px" bgColor="#B24763" />
          <ProgressBar completed={61} height="28px" bgColor="#C65A67" />
          <ProgressBar completed={48} height="28px" bgColor="#D86C69" />
        </div>
      </div>
    </div>
  );
}

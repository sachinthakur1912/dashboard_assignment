import React from "react";
import play from "../assets/play.png";
export default function Routine({ item }) {
  return (
    <div className=" w-[100%] md:w-[30%] px-10 py-3 border border-customBorder rounded-3xl flex flex-col gap-2 bg-white">
      <div className="flex flex-col items-center justify-center gap-1">
        <img src={item.image} className="" />
        <div className="font-semibold">{item.title}</div>
      </div>
      <div>
        <ul className="list-disc">
          <li className=" flex justify-between  font-semibold items-center">
            {item.p1} <span className="text-customTime">{"(10:00)"}</span>{" "}
            <span>
              <img src={play} />
            </span>
          </li>
          <li className="ml-2">{item.p2}</li>
          <li className="ml-2">{item.p3}</li>
          <ul className="list-disc mt-4">
            <li className="flex justify-between font-semibold items-center">
              {item.p4} <span className="text-customTime">{"(10:00)"}</span>{" "}
              <span>
                <img src={play} />
              </span>
            </li>
            <li className="ml-2">{item.p5}</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

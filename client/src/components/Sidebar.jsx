import React, { useState } from "react";
import data from "../data/sidebarLinks";

export default function Sidebar() {
  const [tab, setTab] = useState(1);
  console.log(tab);
  return (
    <div className="hidden lg:flex h-[73vh] w-[80px]  rounded-r-full bg-gradient-to-t from-customOrange to-customPurple flex-col items-center justify-center gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id == tab
              ? "bg-customOr py-1 w-[80%] rounded-3xl flex items-center justify-center"
              : ""
          }`}
          onClick={() => setTab(item.id)}
        >
          <img src={item.image} className="w-[30px]" />
        </div>
      ))}
    </div>
  );
}

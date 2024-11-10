import React, { useState } from "react";
import logo from "../assets/logo.png";
import notification from "../assets/Notification.png";
import settings from "../assets/Settings.png";
import logout from "../assets/Logout.png";
import profile from "../assets/profile.png";
import frame from "../assets/Frame.png";
import data from "../data/sidebarLinks";
import multiply from "../assets/Multiply.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Header() {
  const [tab, setTab] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BACKENDURL}/auth/logout`, {
        withCredentials: true,
      });
      // setIsLoggedIn(false); // Update state to logged out
      // window.location.reload(); // Refresh the page
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="">
          <img src={logo} className="w-[200px]" />
        </div>

        <div className="px-2 py-10 md:px-8 flex flex-col gap-2 text-xl w-[80%] md:w-[50%]">
          <h1 className="text-sm md:text-lg">Good morning Jane!</h1>
          <p className="text-xs md:text-base  ">
            Your attitude determines your direction. Choose positivity and watch
            your life transform
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-3 py-10 lg:px-20 lg:py-10 ">
        <div className="flex gap-2 md:gap-4 items-center">
          <div className="w-6 relative cursor-pointer">
            <img src={notification} alt="notiication" />
            <div className="bg-red-600 h-2 w-2 rounded-full absolute top-0 right-1"></div>
          </div>
          <div className="w-6 cursor-pointer hidden lg:flex">
            <img src={settings} alt="notiication" />
          </div>
          <div
            className="w-6 cursor-pointer flex lg:hidden"
            onClick={() => setShowMenu(true)}
          >
            <img src={frame} alt="logout" />
          </div>
          <div
            className="w-6 cursor-pointer hidden lg:flex"
            onClick={handleLogout}
          >
            <img src={logout} alt="logout" />
          </div>
          <div className="relative cursor-pointer hidden lg:flex">
            <img
              src={profile}
              alt="profile"
              className="rounded-full h-8 w-8 object-cover"
            />
            <div className="bg-[#4D8E2A] h-2 w-2 rounded-full absolute top-0 right-0"></div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </div>
      {/* hamburger menu */}

      <div
        className={` ${
          showMenu ? "flex" : "hidden"
        } lg:hidden w-[80px] h-screen bg-gradient-to-t from-customOrange to-customPurple flex-col items-center justify-center gap-8 absolute right-0 z-100`}
      >
        <div onClick={() => setShowMenu(false)}>
          <img src={multiply} alt="multiply" className="w-6 mr-10" />
        </div>
        <div>
          <img
            src={logout}
            alt="logout"
            className="w-6 cursor-pointer invert"
            onClick={handleLogout}
          />
        </div>
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
    </div>
  );
}

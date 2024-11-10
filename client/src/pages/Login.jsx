import React, { useState } from "react";
import MyCalendar from "../components/Calendar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
    console.log("login successful");
    navigate("/");
  };
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/auth/logout", {
        withCredentials: true,
      });
      setIsLoggedIn(false); // Update state to logged out
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="bg-custom-bg bg-right-top flex items-center justify-center h-[100vh] bg-no-repeat ">
      <button
        onClick={handleLogin}
        className="bg-white text-customPurple2 font-semibold md:bg-customPurple2 py-2 px-4 rounded-3xl md:text-white"
      >
        Login with Google
      </button>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

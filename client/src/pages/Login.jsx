import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
console.log(import.meta.env);
`${import.meta.env.VITE_BACKENDURL}`;

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      window.location.href = `${import.meta.env.VITE_BACKENDURL}/auth/google`;
      localStorage.setItem("isLoggedIn", true);
      console.log("login", setIsLoggedIn);
    } catch (error) {
      console.error("Error logging in:", error);
      // localStorage.setItem("isLoggedIn", false);
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

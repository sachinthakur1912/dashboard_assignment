import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ContentSection from "./ContentSection";

export default function Dashboard() {
  useEffect(() => {
    localStorage.getItem("isLoggedIn")
      ? console.log("logged in")
      : (window.location.href = "/#/login");
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <ContentSection />
    </div>
  );
}

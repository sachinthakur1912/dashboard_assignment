import React from "react";
import Sidebar from "./Sidebar";
import ContentSection from "./ContentSection";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentSection />
    </div>
  );
}

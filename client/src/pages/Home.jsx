import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="w-screen outline">
      <Header />
      <Dashboard />
    </div>
  );
}

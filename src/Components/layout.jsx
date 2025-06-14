import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Navbar from "./Navbar";
import Connect from "./Connect";
import "../App.css";

function Layout() {
  return (
    <div className="Home">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Connect />
      <div className="footer">© osama 2025</div>
    </div>
  );
}

export default Layout;

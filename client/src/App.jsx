import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import CursorFollower from "./Components/CursorFollower";
// import WordLoop from "./Components/WordLoop";

function hello() {
  return (
    <>
    <CursorFollower />
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bgVideo"
        src="/white pixel wave.mp4"
      ></video>

      <div className="main-content">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default hello;

import React, { useState, useEffect } from "react";

export default function RotatingWordBox() {
  // Words you want to show in loop
  const words = ["React", "JavaScript", "Node.js", "MongoDB"];

  // Index of current word
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 sec

    return () => clearInterval(interval); // Clean up
  }, []);

  // Style for the rotating box
  const boxStyle = {
    // display: "inline-block",
    // border: '2px solid #61dafb', // React blue color
    padding: "4px 10px",
    marginLeft: "8px",
    backgroundColor: "#282c34",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    minWidth: "80px",
    textAlign: "center",
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div >
    <p
      style={{
        // alignItems: "center",
        // border: "1px solid black",
        // width:"700px",
        // marginLeft: "20px", 
        backdropFilter: "blur(4px)",
        // width: "fit-content",
        textAlign: "center",
        fontWeight: "bold",
        color: "black", // React blue color
        fontSize: "25px",
        lineHeight: "1.6",
      }}
    >
      Welcome to our website! We specialize in modern technologies like
      <span style={boxStyle}>{words[currentIndex]}</span>
    </p>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const container = useRef();

  useEffect(() => {
    gsap.from(container.current, { opacity: 1, y: 20, duration: 1 });
  }, []);

  return (
    <div
      ref={container}
      style={{
        minHeight: "100vh",
        backgroundColor: "#fcfbf7", // light creamy
        color: "#2a3d45", // dark teal-ish
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 12, fontWeight: "700" }}>
        AI Image Detector
      </h1>
      <p style={{ fontSize: 16, maxWidth: 360, marginBottom: 25, color: "#556b6e" }}>
        Fast, accurate image detection powered by AI.
      </p>
      <button
        style={{
          backgroundColor: "#2a3d45", // dark teal
          color: "#f9f6f0", // light creamy text
          border: "none",
          borderRadius: 25,
          padding: "10px 30px",
          fontWeight: "600",
          fontSize: 16,
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#4a6a6f")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2a3d45")}
        onClick={() => alert("Welcome to AI Image Detector!")}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;

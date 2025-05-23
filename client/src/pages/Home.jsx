import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const container = useRef();

  useEffect(() => {
    gsap.from(container.current, { opacity: 0, y: 30, duration: 1, ease: "power2.out" });
  }, []);

  return (
    <div
      ref={container}
      style={{
        minHeight: "100vh",
        backgroundColor: "#fefcf7",
        color: "#27374d",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 48, marginBottom: 10, letterSpacing: 4, fontWeight: "700" }}>
        AI Image Detector
      </h1>
      <p style={{ fontSize: 18, maxWidth: 400, marginBottom: 30, color: "#4a6572" }}>
        Fast, accurate image detection powered by AI.
      </p>
      <button
        style={{
          backgroundColor: "#d9ead3",
          border: "none",
          borderRadius: 30,
          padding: "12px 40px",
          fontWeight: "600",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(39, 55, 77, 0.1)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#a6c48a")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#d9ead3")}
        onClick={() => alert("Welcome to AI Image Detector!")}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;

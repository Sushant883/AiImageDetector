import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const AiImageDetector = () => {
  const [image, setImage] = useState(null);
  const container = useRef();

  useEffect(() => {
    gsap.from(container.current, { opacity: 1, y: 20, duration: 1 });
  }, []);

  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Detect button handler (placeholder)
  const handleDetect = () => {
    if (!image) {
      alert("Please upload an image first!");
    } else {
      alert("Detecting image... (AI integration pending)");
    }
  };

  return (
    <div
      ref={container}
      style={{
        minHeight: "100vh",
        backgroundColor: "#fefcf7",
        color: "#27374d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 42, marginBottom: 20, fontWeight: "700" }}>
        AI Image Detector
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{
          marginBottom: 20,
          padding: 10,
          borderRadius: 8,
          border: "2px dashed #a6c48a",
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
        }}
      />

      {image && (
        <img
          src={image}
          alt="Uploaded Preview"
          style={{
            width: 300,
            height: "auto",
            borderRadius: 12,
            boxShadow: "0 4px 15px rgba(166, 196, 138, 0.4)",
            marginBottom: 20,
          }}
        />
      )}

      <button
        onClick={handleDetect}
        style={{
          backgroundColor: "#a6c48a",
          color: "#fff",
          border: "none",
          borderRadius: 30,
          padding: "12px 40px",
          fontWeight: "600",
          fontSize: 18,
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(39, 55, 77, 0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#89ad6e")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#a6c48a")}
      >
        Detect
      </button>
    </div>
  );
};

export default AiImageDetector;

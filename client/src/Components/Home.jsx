import React, { useState } from "react";
import WordLoop from "./WordLoop";

function Home() {
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <>
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #fff",
        borderRadius: 10,
        textAlign: "center",
        backdropFilter: "blur(1px)",
        WebkitBackdropFilter: "blur(1px)",
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(240, 240, 240, 0.15))",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: 15 }}>Upload Image</h2>

      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ 
            marginBottom: 20,
            border:"2px solid red",
            fontSize:"25px"
         }}
      /> */}

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{
          padding: "10px",
          border: "2px solid black",
          borderRadius: "6px",
          width:"80%",
          backgroundColor: "#f9f9f9",
          fontSize: "16px",
          color: "#333",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          marginTop: "20px",
        }}
      />

      {preview && (
        <div
          style={{
            width: 250,
            height: 250,
            margin: "0 auto",
            border: "1px solid #ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
    <WordLoop />
    </>
  );
}

export default Home;

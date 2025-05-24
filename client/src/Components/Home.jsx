import React, { useState } from "react";

function Home() {
  const [preview, setPreview] = useState(null);

  function handleImageChange(e) {
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
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
        textAlign: "center",
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
      <button
      style={{
        htmlFor:"Fileupload"
      }}
      >
        Select File
      </button>

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
  );
}

export default Home;

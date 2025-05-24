import React, { useState } from "react";

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
    
    <input
  type="file"
  accept="image/*"
  onChange={handleChange}
  style={{
    padding: '10px',
    border: '2px solid #4CAF50',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    fontSize: '16px',
    color: '#333',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginTop: '20px',
  }}
/>


    <label htmlFor=""></label>

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

import React, { useState, useCallback } from 'react';
import { Upload, Image } from 'lucide-react';

const UploadArea = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const processFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        onImageUpload(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  }, [onImageUpload]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  }, [processFile]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) processFile(e.target.files[0]);
  };

  return (
    <label
      htmlFor="file-input"
      className={`
        block border-2 border-dashed rounded-xl p-10 cursor-pointer
        transition-colors duration-200 text-center
        ${isDragging
          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
          : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600'
        }
      `}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        id="file-input"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <div className="mb-4 p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 inline-block">
        <Upload className="h-8 w-8" />
      </div>

      <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
        Drop your image here
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mb-4">
        or click to browse from your device
      </p>

      <button
        type="button"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
      >
        <Image className="h-4 w-4 mr-2" />
        Select Image
      </button>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        Supports JPG, PNG and GIF up to 10MB
      </p>
    </label>
  );
};

export default UploadArea;

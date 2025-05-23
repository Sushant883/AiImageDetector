import React, { useRef, useState, useCallback } from 'react';
import { Upload, Image } from 'lucide-react';
import { gsap } from 'gsap';

const UploadArea = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dropRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    gsap.to(dropRef.current, {
      scale: 1.02,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      duration: 0.2,
      ease: 'power2.out'
    });
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    gsap.to(dropRef.current, {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      duration: 0.2,
      ease: 'power2.out'
    });
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const processFile = useCallback((file) => {
    if (!file || !file.type.match('image.*')) return;

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
    e.stopPropagation();
    setIsDragging(false);

    gsap.to(dropRef.current, {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      duration: 0.2,
      ease: 'power2.out'
    });

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [processFile]);

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  }, [processFile]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      ref={dropRef}
      className={`
        border-2 border-dashed rounded-xl p-10 
        transition-all duration-200 cursor-pointer
        flex flex-col items-center justify-center text-center
        ${isDragging 
          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
          : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600'
        }
      `}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleButtonClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <div className="mb-4 p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
        <Upload className="h-8 w-8" />
      </div>

      <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
        Drop your image here
      </h3>

      <p className="text-slate-500 dark:text-slate-400 mb-4">
        or click to browse from your device
      </p>

      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <Image className="h-4 w-4 mr-2" />
          Select Image
        </button>
      </span>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        Supports JPG, PNG and GIF up to 10MB
      </p>
    </div>
  );
};

export default UploadArea;

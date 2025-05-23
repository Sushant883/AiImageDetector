import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Upload,
  RotateCw,
  CheckCircle,
  AlertCircle,
  Image as ImageIcon,
} from 'lucide-react';
import UploadArea from '../components/UploadArea';
import ResultsDisplay from '../components/ResultDisplay';
import FeaturesList from '../components/FeaturesList';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Initial page animation
    gsap.from(pageRef.current?.children || [], {
      opacity: 1,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  const handleImageUpload = (imageDataUrl) => {
    setSelectedImage(imageDataUrl);
    setResults(null);
    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      // Mock result data
      const mockResult = {
        isAI: Math.random() > 0.5, // Random result for demo
        confidence: Math.round(Math.random() * 100) / 100,
        details: [
          { category: 'Facial inconsistencies', score: Math.random() },
          { category: 'Background artifacts', score: Math.random() },
          { category: 'Texture patterns', score: Math.random() },
          { category: 'Lighting anomalies', score: Math.random() },
        ],
      };

      setResults(mockResult);
      setIsAnalyzing(false);
    }, 2500);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setResults(null);
  };

  return (
    <div
      ref={pageRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16"
    >
      <HeroSection />

      <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Analyze Your Image
        </h2>

        {!selectedImage ? (
          <UploadArea onImageUpload={handleImageUpload} />
        ) : (
          <div className="space-y-8">
            <div className="relative max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto object-contain"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={resetAnalysis}
                  className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-sm"
                  aria-label="Reset analysis"
                >
                  <RotateCw className="h-5 w-5" />
                </button>
              </div>
            </div>

            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-indigo-200 dark:border-slate-700 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
                </div>
                <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
                  Analyzing image...
                </p>
              </div>
            ) : results ? (
              <ResultsDisplay results={results} />
            ) : null}
          </div>
        )}
      </section>

      <FeaturesList />
    </div>
  );
};

export default Home;

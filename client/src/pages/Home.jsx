import React, { useState } from 'react';
import UploadArea from '../components/UploadArea';
import ResultsDisplay from '../components/ResultDisplay';
import FeaturesList from '../components/FeaturesList';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleImageUpload = (dataUrl) => {
    setSelectedImage(dataUrl);
    setResults(null);
    setIsAnalyzing(true);

    setTimeout(() => {
      const mock = {
        isAI: Math.random() > 0.5,
        confidence: Math.random(),
        details: [
          { category: 'Facial inconsistencies', score: Math.random() },
          { category: 'Background artifacts', score: Math.random() },
          { category: 'Texture patterns', score: Math.random() },
          { category: 'Lighting anomalies', score: Math.random() },
        ],
      };
      setResults(mock);
      setIsAnalyzing(false);
    }, 2500);
  };

  const reset = () => {
    setSelectedImage(null);
    setResults(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <HeroSection />

      <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Analyze Your Image
        </h2>

        {!selectedImage ? (
          <UploadArea onImageUpload={handleImageUpload} />
        ) : (
          <div className="space-y-8">
            <div className="relative max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
              <img src={selectedImage} alt="" className="w-full object-contain" />
              <button
                onClick={reset}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white"
              >
                Reset
              </button>
            </div>

            {isAnalyzing ? (
              <div className="text-center py-8">
                <div className="inline-block w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600"></div>
                <p className="mt-4">Analyzing image...</p>
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

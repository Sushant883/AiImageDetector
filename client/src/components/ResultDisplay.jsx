import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

const ResultsDisplay = ({ results }) => {
  const containerRef = useRef(null);
  const gaugeRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // Animate in the results container
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    });

    // Animate the gauge
    const confidence = results.confidence * 100;
    gsap.to(gaugeRef.current, {
      width: `${confidence}%`,
      duration: 1.5,
      ease: 'elastic.out(1, 0.75)',
      delay: 0.2
    });

    // Animate in the details
    gsap.from(detailsRef.current?.children || [], {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.4,
      ease: 'power3.out'
    });
  }, [results]);

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="flex justify-center">
          {results.isAI ? (
            <div className="flex items-center text-red-500">
              <AlertCircle className="h-8 w-8 mr-2" />
              <h3 className="text-2xl font-bold">AI Generated</h3>
            </div>
          ) : (
            <div className="flex items-center text-green-500">
              <CheckCircle className="h-8 w-8 mr-2" />
              <h3 className="text-2xl font-bold">Likely Authentic</h3>
            </div>
          )}
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {results.isAI 
            ? "Our analysis indicates this image was likely created by AI."
            : "Our analysis suggests this image is likely authentic."}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Confidence
          </span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {Math.round(results.confidence * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
          <div 
            ref={gaugeRef}
            className={`h-2.5 rounded-full ${
              results.isAI ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>

      <div ref={detailsRef} className="space-y-4">
        <h4 className="font-medium text-slate-800 dark:text-white">Detection Details:</h4>
        {results.details.map((detail, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
          >
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                {detail.category}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-24 bg-slate-200 dark:bg-slate-600 rounded-full h-1.5 mr-2">
                <div 
                  className={`h-1.5 rounded-full ${
                    detail.score > 0.5 ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${detail.score * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {Math.round(detail.score * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;

import React from 'react';
import { CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

const ResultsDisplay = ({ results }) => {
  const confidencePct = Math.round(results.confidence * 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
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
            {confidencePct}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full ${
              results.isAI ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${confidencePct}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-slate-800 dark:text-white">
          Detection Details:
        </h4>
        {results.details.map((detail, i) => {
          const pct = Math.round(detail.score * 100);
          return (
            <div
              key={i}
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
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {pct}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsDisplay;

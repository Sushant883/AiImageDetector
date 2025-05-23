import React from 'react';
import { Shield, Zap, History, LineChart, Lock, Share2 } from 'lucide-react';

const FeaturesList = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Advanced Detection',
      description:
        'Utilizes state-of-the-art AI algorithms to detect even the most sophisticated AI-generated images.',
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Real-Time Analysis',
      description:
        'Get instant results with our lightning-fast analysis engine that processes images in seconds.',
    },
    {
      icon: <History className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Scan History',
      description:
        'Keep track of all your previously analyzed images and their detection results.',
    },
    {
      icon: <LineChart className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Detailed Reports',
      description:
        'Receive comprehensive analysis reports with confidence scores and detection metrics.',
    },
    {
      icon: <Lock className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Privacy Protected',
      description:
        'Your uploaded images are analyzed locally and never stored on our servers.',
    },
    {
      icon: <Share2 className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Shareable Results',
      description:
        'Easily share detection results with others via a secure, time-limited link.',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
        Why Choose <span className="text-indigo-600 dark:text-indigo-400">TruthLens</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;

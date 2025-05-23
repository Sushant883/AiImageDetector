import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Scan, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    });

    timeline.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    timeline.from(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    timeline.from(
      imageContainerRef.current,
      {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.6'
    );

    // Add a subtle floating animation to the image
    gsap.to(imageContainerRef.current, {
      y: 15,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const handleScroll = () => {
    const uploadSection = document.querySelector('section');
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative overflow-hidden py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Detect AI-Generated{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Images</span>{' '}
            with Confidence
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl"
          >
            TruthLens uses advanced machine learning algorithms to analyze and
            detect AI-generated images with high accuracy. Protect yourself from
            deepfakes and misinformation.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              ref={buttonRef}
              onClick={handleScroll}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            >
              <Scan className="mr-2 h-5 w-5" />
              Analyze Now
            </button>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                99.8% Accuracy
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Instant Results
              </span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Privacy Protected
              </span>
            </div>
          </div>
        </div>

        <div
          ref={imageContainerRef}
          className="relative aspect-square max-w-lg mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI Detection"
            className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-1">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <span className="text-xs font-bold text-red-500">
                AI Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

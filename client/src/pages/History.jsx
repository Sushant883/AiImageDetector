import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { History as HistoryIcon, CheckCircle, AlertCircle, Calendar, Clock, Trash2 } from 'lucide-react';

const History = () => {
  const [historyItems, setHistoryItems] = useState([
    {
      id: '1',
      date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      imageSrc: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isAI: true,
      confidence: 0.92
    },
    {
      id: '2',
      date: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      imageSrc: 'https://images.pexels.com/photos/16473048/pexels-photo-16473048/free-photo-of-woman-in-dress-standing-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isAI: false,
      confidence: 0.87
    },
    {
      id: '3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      imageSrc: 'https://images.pexels.com/photos/7291914/pexels-photo-7291914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isAI: true,
      confidence: 0.95
    }
  ]);

  const pageRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    });

    if (listRef.current) {
      gsap.from(listRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out'
      });
    }
  }, []);

  const deleteHistoryItem = (id) => {
    const element = document.getElementById(`history-item-${id}`);
    
    if (element) {
      gsap.to(element, {
        opacity: 0,
        x: -100,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          setHistoryItems(prev => prev.filter(item => item.id !== id));
        }
      });
    } else {
      setHistoryItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div ref={pageRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 text-center md:text-left">
        <h1 
          ref={headingRef}
          className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3"
        >
          <HistoryIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          Analysis History
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          View and manage your previously analyzed images
        </p>
      </header>

      {historyItems.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-xl shadow-md">
          <HistoryIcon className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-2 text-xl font-medium text-slate-900 dark:text-white">No history found</h3>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Your analyzed images will appear here
          </p>
        </div>
      ) : (
        <div ref={listRef} className="space-y-6">
          {historyItems.map(item => (
            <div 
              id={`history-item-${item.id}`}
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="md:flex">
                <div className="md:shrink-0 md:w-48 h-48 md:h-auto relative">
                  <img 
                    className="h-full w-full object-cover" 
                    src={item.imageSrc} 
                    alt="History item" 
                  />
                  <div className="absolute top-2 right-2 bg-white dark:bg-slate-800 rounded-full p-1.5 shadow-md">
                    {item.isAI ? (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.isAI ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}>
                          {item.isAI ? 'AI Generated' : 'Authentic'}
                        </span>
                        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                          Confidence: <span className="font-medium">{Math.round(item.confidence * 100)}%</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => deleteHistoryItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.date)}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {formatTime(item.date)}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/40 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;

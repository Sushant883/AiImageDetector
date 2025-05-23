import React, { useState } from 'react';
import {
  History as HistoryIcon,
  CheckCircle,
  AlertCircle,
  Calendar,
  Clock,
  Trash2
} from 'lucide-react';

const History = () => {
  const [items, setItems] = useState([
    { id: '1', date: new Date(Date.now() - 2*3600000), imageSrc: '...', isAI: true, confidence: 0.92 },
    { id: '2', date: new Date(Date.now() - 5*3600000), imageSrc: '...', isAI: false, confidence: 0.87 },
    { id: '3', date: new Date(Date.now() - 24*3600000), imageSrc: '...', isAI: true, confidence: 0.95 }
  ]);

  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const fmtDate = d => d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  const fmtTime = d => d.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
          <HistoryIcon className="h-8 w-8 text-indigo-600" />
          Analysis History
        </h1>
        <p className="mt-2 text-slate-600">View and manage your previously analyzed images</p>
      </header>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <HistoryIcon className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-2 text-xl font-medium">No history found</h3>
          <p className="mt-1 text-slate-500">Your analyzed images will appear here</p>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map(item => {
            const pct = Math.round(item.confidence * 100);
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-48 h-48 relative">
                    <img className="h-full w-full object-cover" src={item.imageSrc} alt="" />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5">
                      {item.isAI
                        ? <AlertCircle className="h-5 w-5 text-red-500" />
                        : <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="flex justify-between items-start">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.isAI
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.isAI ? 'AI Generated' : 'Authentic'}
                      </span>
                      <button onClick={() => remove(item.id)} className="text-slate-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="mt-3 text-base text-slate-600">
                      Confidence: <span className="font-medium">{pct}%</span>
                    </p>
                    <div className="mt-4 flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" /> {fmtDate(item.date)}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" /> {fmtTime(item.date)}
                    </div>
                    <button className="mt-4 px-3 py-1.5 text-sm font-medium rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;

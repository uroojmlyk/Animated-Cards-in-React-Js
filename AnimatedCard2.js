// src/components/cards/AnimatedCard2.jsx
import React, { useEffect, useState } from 'react';

const AnimatedCard2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-96 rounded-3xl overflow-hidden group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(139, 92, 246, 0.15) 0%, 
          rgba(59, 130, 246, 0.1) 30%, 
          rgba(16, 185, 129, 0.05) 70%, 
          transparent 100%)`,
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-3xl p-[2px]">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-60 ${
          isHovered ? 'animate-gradient' : ''
        }`}></div>
        <div className="absolute inset-[2px] bg-gray-900 rounded-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-float"></div>
      <div className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl animate-float delay-1000"></div>
      <div className="absolute top-12 left-10 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg animate-float delay-500"></div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-cyan-300">LIVE</span>
            </div>
            <div className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300">
              Updated just now
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Gradient Morph
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Interactive Card
            </span>
          </h3>
          
          <p className="text-gray-400 mb-6">
            Watch the gradient follow your cursor. Real-time interactive experience.
          </p>

          {/* Animated Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Processing Data</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 font-semibold rounded-xl backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 group">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Refresh
            </span>
          </button>
          
          <button className="flex-1 py-3.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 font-semibold rounded-xl backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 group">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Boost
            </span>
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default AnimatedCard2;
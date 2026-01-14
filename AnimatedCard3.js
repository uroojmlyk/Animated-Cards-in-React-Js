// src/components/cards/AnimatedCard3.jsx
import React, { useState, useEffect } from 'react';

const AnimatedCard3 = () => {
  const [time, setTime] = useState(new Date());
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Create particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden group">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${3 / particle.speed}s ease-in-out infinite`,
            animationDelay: `${particle.id * 0.2}s`,
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* Header with Stats */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Premium Account</div>
              <div className="text-lg font-bold text-white">Glass Card Pro</div>
            </div>
          </div>
          
          {/* Real-time Clock */}
          <div className="text-right">
            <div className="text-sm text-gray-400">Current Time</div>
            <div className="text-xl font-mono font-bold text-cyan-300">
              {formatTime(time)}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">
            Glassmorphism UI
            <span className="block text-lg font-normal text-gray-400 mt-1">
              With Real-time Animations
            </span>
          </h3>
          
          <p className="text-gray-400 mb-8">
            Experience modern glass effect with floating particles and real-time updates.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'CPU Usage', value: '42%', color: 'from-green-400 to-emerald-500' },
              { label: 'Memory', value: '7.8 GB', color: 'from-blue-400 to-cyan-500' },
              { label: 'Network', value: '24 Mbps', color: 'from-purple-400 to-pink-500' },
              { label: 'Storage', value: '1.2 TB', color: 'from-orange-400 to-yellow-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500 group-hover:w-full`}
                    style={{ width: `${Math.random() * 40 + 30}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {['🌙', '☀️', '⚡'].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-110"
                >
                  {icon}
                </button>
              ))}
            </div>
            <span className="text-sm text-gray-400 ml-2">Themes</span>
          </div>
          
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 font-semibold rounded-xl backdrop-blur-sm border border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Customize
            </span>
          </button>
        </div>
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl pointer-events-none"></div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default AnimatedCard3;
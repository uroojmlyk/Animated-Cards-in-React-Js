// src/components/cards/AnimatedCard1.jsx
import React, { useState } from 'react';

const AnimatedCard1 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-1000">
      <div
        className={`relative w-full h-96 transition-all duration-500 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'hidden' : 'block'}`}>
          <div className="h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-4">
                  Premium Feature
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">3D Interactive Card</h3>
                <p className="text-blue-100/80">
                  Hover to see 3D effect. Click to flip and discover more details.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  ))}
                </div>
                <button className="px-6 py-2.5 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'block' : 'hidden'}`}>
          <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🚀</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Features</h3>
              
              <ul className="space-y-3 mb-8">
                {['Real-time Updates', 'Advanced Analytics', 'Custom Themes', 'Team Collaboration'].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="w-full bg-gray-700/50 rounded-xl p-4 mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Storage Used</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Flip Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard1;
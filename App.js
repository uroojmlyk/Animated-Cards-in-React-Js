// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import AnimatedCard1 from './components/cards/AnimatedCard1';
import AnimatedCard2 from './components/cards/AnimatedCard2';
import AnimatedCard3 from './components/cards/AnimatedCard3';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Animated Cards</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hover, click, and interact with these beautifully animated components
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-center mb-2">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-semibold">
                3D Flip Effect
              </div>
            </div>
            <AnimatedCard1 />
          </div>
          
          <div className="space-y-4">
            <div className="text-center mb-2">
              <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-semibold">
                Gradient Morph
              </div>
            </div>
            <AnimatedCard2 />
          </div>
          
          <div className="space-y-4">
            <div className="text-center mb-2">
              <div className="inline-block px-4 py-2 bg-pink-500/10 text-pink-300 rounded-full text-sm font-semibold">
                Glassmorphism
              </div>
            </div>
            <AnimatedCard3 />
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Live Demo</span>
            </div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-300">
              <span className="text-cyan-300">Hover</span> over cards for effects •{' '}
              <span className="text-purple-300">Click</span> flip card •{' '}
              <span className="text-pink-300">Move cursor</span> on gradient card
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div 
      className="max-w-sm mx-auto mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main Card */}
      <div className="overflow-hidden transition-all duration-300 transform shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl hover:shadow-2xl">
        
        {/* Card Header with Animation */}
        <motion.div 
          className="p-6 bg-white/10 backdrop-blur-sm"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              A
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-white">Animated Card</h2>
              <p className="text-blue-100">React + Tailwind + Framer Motion</p>
            </div>
          </div>
        </motion.div>

        {/* Card Body */}
        <div className="p-6">
          <motion.h3 
            className="mb-3 text-xl font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Special Features
          </motion.h3>
          
          <motion.ul 
            className="mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {['Hover Effects', 'Smooth Animations', 'Gradient Background', 'Responsive Design'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-blue-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <span className="mr-2">✓</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Animated Button */}
          <motion.button
            className="w-full px-4 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-cyan-500 hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0px 5px 15px rgba(0,0,0,0.1)",
                "0px 10px 20px rgba(59, 130, 246, 0.5)",
                "0px 5px 15px rgba(0,0,0,0.1)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Card Footer with Pulsing Dot */}
        <div className="flex items-center justify-between px-6 py-4 border-t bg-black/20 border-white/10">
          <span className="text-sm text-blue-100">Live Status</span>
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
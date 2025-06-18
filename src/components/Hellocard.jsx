import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Hellocard() {
  return (
    <div 
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-24 md:py-0 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Hello, I'm <span className="text-blue-600">Bibhanshu Singh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg">
          A passionate developer crafting engaging digital experiences with modern web technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-full font-medium transition-colors text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="/photo.jpg"
            alt="Profile"
            className="w-full max-w-md rounded-2xl shadow-xl border-8 border-white"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Hellocard;
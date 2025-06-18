import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="color.jpg"
                alt="Profile"
                className="rounded-2xl shadow-lg w-64 h-64 object-cover"
              />
              
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating beautiful, functional digital experiences. 
              With expertise in both frontend and backend technologies, I bridge the gap between design and 
              technical implementation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
                <ul className="space-y-2">
                  {['UI/UX','HTML','JavaScript', 'React', 'Node.js', 'Express', 'Web3', 'Tailwind CSS','Motoko'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Hire Me
              </a>
              <a 
                href="#projects" 
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
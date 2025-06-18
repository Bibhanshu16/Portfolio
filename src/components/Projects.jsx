import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Token-Web3",
      category: "Web3/Blockchain",
      image: "./token.png",
      link: "https://github.com/Bibhanshu16/Token-Web3"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "./download.png",
      link: "https://fashion-ecommerce-website-tau.vercel.app/"
    },
    {
      id: 3,
      title: "3D Website",
      category: "Web Development",
      image: "./3D.png",
      link: "https://3-d-sable.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Works</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore my recent projects that showcase my skills and creativity in web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.category}</p>
                <a 
                  href={project.link} 
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
          >
            Get a Vision? Let's Bring it to Life!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
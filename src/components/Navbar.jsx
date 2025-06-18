import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          padding-top: 5rem;
        }
      `}</style>
      <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 left-0 z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleScroll(e, "home")}
                className="flex items-center"
              >
                <img src="/logo.jpg" alt="Logo" className="h-8 w-8 object-contain" />
              </a>
            </div>
            
            
            <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="text-gray-600 hover:text-blue-600 px-3 py-1 text-xs font-medium transition-colors rounded-full hover:bg-white"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="text-gray-600 hover:text-blue-600 px-3 py-1 text-xs font-medium transition-colors rounded-full hover:bg-white"
              >
                Projects
              </a>
              <a
                href="#certificates"
                onClick={(e) => handleScroll(e, "certificates")}
                className="text-gray-600 hover:text-blue-600 px-3 py-1 text-xs font-medium transition-colors rounded-full hover:bg-white"
              >
                Certificates
              </a>
              <a
                href="#about-me"
                onClick={(e) => handleScroll(e, "about-me")}
                className="text-gray-600 hover:text-blue-600 px-3 py-1 text-xs font-medium transition-colors rounded-full hover:bg-white"
              >
                About
              </a>
            </div>
            
            
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                Contact
                <span className="material-symbols-outlined">
                  arrow_outward
               </span>
              </a>
            </div>
            
            
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Projects
              </a>
              <a
                href="#certificates"
                onClick={(e) => handleScroll(e, "certificates")}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Certificates
              </a>
              <a
                href="#about-me"
                onClick={(e) => handleScroll(e, "about-me")}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center"

              >
                Contact
                
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
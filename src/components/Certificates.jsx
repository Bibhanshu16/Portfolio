import React from "react";

function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "Deloitte Australia - Cyber Job Simulation",
      issuer: "Forage",
      imageUrl: "./Deloitte.png",
      certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_5kuy8figT5NLBjX8H_1748786655575_completion_certificate.pdf",
      date: "June 2025"
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      issuer: "Udemy",
      imageUrl: "./Udemy.jpg",
      certificateLink: "https://udemy-certificate.s3.amazonaws.com/image/UC-9744f9a8-d9fa-4980-a6c8-6fe78441c769.jpg",
      date: "June 2025"
    },
    {
      id: 3,
      name: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      imageUrl: "Tata.jpg",
      certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_5kuy8figT5NLBjX8H_1748405966731_completion_certificate.pdf",
      date: "May 2025"
    },
    {
      id: 4,
      name: "DBMS Course",
      issuer: "Scaler",
      imageUrl: "./Scaler.png",
      certificateLink: "https://www.linkedin.com/in/bibhanshusingh/details/certifications/1750222616092/single-media-viewer/?profileId=ACoAAERXX1kB-wwJRxKKkb83RglHd_iMDEx1MDc",
      date: "Feb 2025"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional certifications that validate my expertise in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Issued by: {cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

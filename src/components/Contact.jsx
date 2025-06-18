import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [buttonText, setButtonText] = useState('Send Message');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch('https://formspree.io/f/xblykynr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      setButtonText('Submitted!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setButtonText('Send Message');
        window.location.hash = '#contact'; 
      }, 1500);
    }).catch((err) => {
      alert('There was an error submitting the form.');
      console.error(err);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {buttonText}
              </button>
            </form>
          </div>

          
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                  <p className="text-blue-400">bibhanshus394@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-300">Available from India</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Current Workplace</h4>
                  <p className="text-gray-300">Bhilai, CG</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/bibhanshusingh/" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                    <a href="https://github.com/Bibhanshu16" className="text-gray-400 hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                    <a href="https://www.instagram.com/_art_lover_1/" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  Website Project No. 024<br />
                  Website Designer No. 006
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

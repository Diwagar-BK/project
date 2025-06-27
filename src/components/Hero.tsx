import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-700 via-teal-600 to-orange-600 bg-clip-text text-transparent">
                Diwagar BK
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Data Scientist & Developer passionate about turning data into insights and building innovative solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="group bg-gradient-to-r from-blue-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-800 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Diwagar_BK.pdf"
              download="Diwagar_BK_CV.pdf"
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-700 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="mailto:diwabk04@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
            >
              <Mail size={24} className="text-gray-700 hover:text-blue-700" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <Github size={24} className="text-gray-700 hover:text-gray-900" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
            >
              <Linkedin size={24} className="text-gray-700 hover:text-blue-600" />
            </a>
          </div>

          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-4">Available for freelance work</p>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-green-600 font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
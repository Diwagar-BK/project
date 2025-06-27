import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate graduate with a strong foundation in data science and development, 
            ready to bring innovative solutions to your projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a graduate with a deep passion for data science and software development, 
              I combine analytical thinking with creative problem-solving to deliver impactful solutions. 
              My journey in technology is driven by curiosity and a commitment to continuous learning.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in Python programming, machine learning, and full-stack development. 
              Whether it's extracting insights from complex datasets or building user-friendly applications, 
              I'm ready to help bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">Problem Solver</span>
              </div>
              <div className="bg-teal-50 px-4 py-2 rounded-full">
                <span className="text-teal-700 font-medium">Quick Learner</span>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-full">
                <span className="text-orange-700 font-medium">Team Player</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl group hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Science</h3>
              <p className="text-gray-600 text-sm">
                Extracting meaningful insights from complex datasets using statistical analysis
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl group hover:shadow-lg transition-all duration-300">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Building robust applications with modern technologies and best practices
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl group hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ML Models</h3>
              <p className="text-gray-600 text-sm">
                Creating intelligent systems that learn and adapt to solve real-world problems
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl group hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Bringing fresh perspectives and creative solutions to every challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Plus, Briefcase } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting projects coming soon! This space will showcase my work in data science and development.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12 flex flex-col items-center justify-center text-center border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors group cursor-pointer max-w-2xl">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Briefcase className="text-blue-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I'm currently working on exciting data science and development projects that will showcase my skills and expertise. 
              This section will be updated with detailed case studies, code samples, and live demonstrations.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Plus size={20} />
              <span>Stay tuned for updates</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in collaborating on a project or seeing my work in progress?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
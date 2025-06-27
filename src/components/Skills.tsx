import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL', 'R']
    },
    {
      title: 'Data Science & ML',
      skills: ['Pandas & NumPy', 'Scikit-learn', 'TensorFlow', 'Data Visualization']
    },
    {
      title: 'Web Development',
      skills: ['Flask', 'Django', 'HTML/CSS', 'Git']
    },
    {
      title: 'Data Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
    }
  ];

  const tools = [
    'Jupyter Notebook', 'VS Code', 'Google Colab', 'Power BI', 
    'Tableau', 'Docker', 'AWS', 'Postman'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data science and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 px-4 py-2 rounded-full text-blue-700 font-medium hover:from-blue-100 hover:to-teal-100 transition-colors duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
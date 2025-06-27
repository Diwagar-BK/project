import React from 'react';
import { BarChart3, Code2, Database, Smartphone, Brain, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Transform raw data into meaningful insights with interactive dashboards and compelling visualizations.',
      features: ['Statistical Analysis', 'Interactive Dashboards', 'Report Generation', 'Data Storytelling'],
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn from data to solve complex business problems.',
      features: ['Predictive Modeling', 'Classification & Regression', 'Model Deployment', 'Performance Optimization'],
      color: 'purple'
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Create modern, responsive web applications with clean code and intuitive user experiences.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Responsive Design'],
      color: 'teal'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build cross-platform mobile applications that deliver seamless user experiences.',
      features: ['Cross-platform Apps', 'API Integration', 'User Interface Design', 'Performance Optimization'],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Design and implement robust data pipelines for efficient data processing and storage.',
      features: ['Data Pipeline Creation', 'ETL Processes', 'Database Optimization', 'Data Quality Assurance'],
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Help businesses make data-driven decisions with comprehensive analytics and insights.',
      features: ['KPI Dashboards', 'Market Analysis', 'Performance Metrics', 'Strategic Insights'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700',
      teal: 'from-teal-500 to-teal-600 group-hover:from-teal-600 group-hover:to-teal-700',
      orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700',
      green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
      indigo: 'from-indigo-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your data science and development needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and data-driven solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
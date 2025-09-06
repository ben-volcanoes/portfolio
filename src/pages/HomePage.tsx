import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl lg:text-8xl font-light text-black mb-8 leading-[0.9] font-poppins tracking-tight">
          <h1 className="text-6xl lg:text-8xl font-light text-black dark:text-white mb-8 leading-[0.9] font-poppins tracking-tight">
            Sarah Chen
          </h1>
          <div className="flex items-start space-x-16 mb-12">
            <div className="flex-1">
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-neuton">
                Product Designer crafting meaningful digital experiences through research-driven design and strategic thinking.
              </p>
            </div>
            <div className="hidden lg:block text-sm text-gray-500 dark:text-gray-400 font-neuton">
              <p>Currently at TechFlow</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/projects"
              className="group inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-poppins font-medium"
            >
              View Work
              <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-poppins font-medium"
            >
              About
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8 font-poppins">Selected Work</h2>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to={`/projects/${project.id}`} className="group block">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-4 lg:pt-2">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-light text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors font-poppins">
                        {project.title}
                      </h3>
                      <ArrowUpRight 
                        size={20}
                        className="text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4"
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-neuton">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 font-neuton">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-16"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-black dark:text-white mb-6 font-poppins">Let's work together</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-neuton text-lg">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:hello@sarahchen.design"
                className="group inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-poppins"
              >
                hello@sarahchen.design
                <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400 font-neuton">
                <a href="https://linkedin.com/in/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://dribbble.com/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                  Dribbble
                </a>
                <a href="https://twitter.com/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HomePage;
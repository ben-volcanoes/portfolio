import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-6xl lg:text-8xl font-light text-black dark:text-white mb-8 leading-[0.9] font-poppins tracking-tight">
            Work
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed font-neuton">
            A collection of selected work spanning user experience design, product strategy, 
            and interface design across various industries and platforms.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
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
                      <h2 className="text-2xl font-light text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors font-poppins">
                        {project.title}
                      </h2>
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
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium font-neuton"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
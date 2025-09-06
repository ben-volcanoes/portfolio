import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="aspect-[16/10] bg-gray-100 mb-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-light text-black group-hover:text-gray-600 transition-colors font-poppins">
                {project.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mt-1 font-neuton">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
            </div>
            <ArrowUpRight 
              size={18} 
              className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4" 
            />
          </div>
          
          <p className="text-gray-600 leading-relaxed text-sm font-neuton">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium font-neuton"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, Users, Target } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-2xl font-light text-black font-poppins">Project not found</h1>
        <Link to="/projects" className="text-gray-600 hover:text-black mt-4 inline-block font-neuton">
          ← Back to Work
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          to="/projects"
          className="group inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-neuton"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-0.5 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-light text-black dark:text-white mb-8 leading-[0.9] font-poppins tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl font-neuton">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-8 mb-12"
        >
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-poppins">Year</h4>
            <p className="text-gray-700 dark:text-gray-300 font-neuton">{project.year}</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-poppins">Team</h4>
            <p className="text-gray-700 dark:text-gray-300 font-neuton">{project.team}</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-poppins">Category</h4>
            <p className="text-gray-700 dark:text-gray-300 font-neuton">{project.category}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium font-neuton"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {project.liveUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
             className="group inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-poppins font-medium"
            >
              View Live Project
              <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        )}
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full aspect-[16/9] bg-gray-100 mb-20"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-16"
        >
          {/* Context */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Context</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg">
              This project was initiated as part of a company-wide digital transformation effort. 
              The existing platform had been in use for over 5 years without major updates, 
              resulting in outdated user patterns and declining user satisfaction scores. 
              Market research indicated that competitors were gaining ground with more modern, 
              intuitive interfaces.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Problem</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-6">
              Users were experiencing significant friction in completing their primary tasks. 
              Key issues identified included:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-neuton text-lg">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                68% of users abandoned their sessions without completing primary goals
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Average task completion time was 40% longer than industry benchmarks
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Support tickets increased by 25% due to interface confusion
              </li>
            </ul>
          </section>

          {/* Project Goal */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Project Goal</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 border-l-2 border-black dark:border-white">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-4">
                <strong className="font-poppins text-black dark:text-white">Primary Objective:</strong> Redesign the user experience to reduce task completion time by 30% 
                and increase user satisfaction scores to above 4.5/5.0.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg">
                <strong className="font-poppins text-black dark:text-white">Secondary Goals:</strong> Establish a scalable design system, improve accessibility compliance, 
                and create a foundation for future feature development.
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">The approach</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              I employed a human-centered design methodology, combining quantitative data analysis 
              with qualitative user research to inform design decisions. The process was structured 
              in four key phases:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  phase: 'Research',
                  description: 'User interviews, analytics review, competitive analysis'
                },
                {
                  phase: 'Ideation',
                  description: 'Concept development, wireframing, user journey mapping'
                },
                {
                  phase: 'Design',
                  description: 'High-fidelity prototypes, design system creation'
                },
                {
                  phase: 'Validation',
                  description: 'Usability testing, stakeholder feedback, iteration'
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 p-6">
                  <h4 className="font-medium text-black dark:text-white mb-3 font-poppins">{item.phase}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-neuton">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Discovery/User Needs */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Discovery/user needs</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              Through 15 user interviews and analysis of 6 months of user behavior data, 
              we identified three primary user personas and their core needs:
            </p>
            <div className="space-y-8">
              {[
                {
                  persona: 'Power Users',
                  need: 'Efficient workflows and keyboard shortcuts for rapid task completion',
                  percentage: '35%'
                },
                {
                  persona: 'Occasional Users',
                  need: 'Clear guidance and intuitive navigation to prevent confusion',
                  percentage: '45%'
                },
                {
                  persona: 'New Users',
                  need: 'Comprehensive onboarding and contextual help throughout the experience',
                  percentage: '20%'
                }
              ].map((user, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-poppins font-medium text-sm">
                    {user.percentage}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">{user.persona}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-neuton text-lg">{user.need}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prioritization */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Prioritization</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              Using the MoSCoW method and impact vs. effort matrix, we prioritized features 
              based on user needs and business objectives:
            </p>
            <div className="space-y-6">
              <div className="border-l-2 border-black dark:border-white pl-6">
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Must Have</h4>
                <p className="text-gray-700 dark:text-gray-300 font-neuton">Simplified navigation, improved search functionality, streamlined checkout process</p>
              </div>
              <div className="border-l-2 border-gray-400 dark:border-gray-500 pl-6">
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Should Have</h4>
                <p className="text-gray-700 dark:text-gray-300 font-neuton">Personalized dashboard, advanced filtering options, mobile optimization</p>
              </div>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Could Have</h4>
                <p className="text-gray-700 dark:text-gray-300 font-neuton">Dark mode, advanced analytics, social sharing features</p>
              </div>
            </div>
          </section>

          {/* Iterations */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Iterations</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              The design evolved through multiple iterations based on user feedback and stakeholder input. 
              Each iteration focused on refining specific aspects of the user experience:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="aspect-video bg-gray-100 mb-4">
                  <img
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Iteration 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Iteration 1</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-neuton">Initial wireframes and basic layout structure</p>
              </div>
              <div>
                <div className="aspect-video bg-gray-100 mb-4">
                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Iteration 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Iteration 2</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-neuton">Refined interactions and visual hierarchy</p>
              </div>
              <div>
                <div className="aspect-video bg-gray-100 mb-4">
                  <img
                    src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Final iteration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-black dark:text-white mb-2 font-poppins">Final Design</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-neuton">Polished interface with validated interactions</p>
              </div>
            </div>
          </section>

          {/* Test & Measure */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Test & measure</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              We conducted comprehensive usability testing with 24 participants across our three user personas. 
              Testing methods included moderated remote sessions, unmoderated task-based tests, and A/B testing 
              of key interface elements.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-8">
              <h4 className="font-medium text-black dark:text-white mb-6 font-poppins">Key Metrics Tracked</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-black dark:text-white mb-3 font-poppins text-sm uppercase tracking-wider">Usability Metrics</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-neuton">
                    <li>• Task completion rate</li>
                    <li>• Time on task</li>
                    <li>• Error rate</li>
                    <li>• User satisfaction (SUS score)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-black dark:text-white mb-3 font-poppins text-sm uppercase tracking-wider">Business Metrics</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-neuton">
                    <li>• Conversion rate</li>
                    <li>• User engagement</li>
                    <li>• Support ticket volume</li>
                    <li>• Feature adoption rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Project Outcome */}
          <section>
            <h3 className="text-2xl font-light text-black dark:text-white mb-6 font-poppins">Project outcome</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              The redesigned platform exceeded all success metrics and received overwhelmingly positive 
              feedback from both users and stakeholders. The project established new design standards 
              that continue to guide product development.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 bg-black dark:bg-white text-white dark:text-black p-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light mb-2 font-poppins">150%</div>
                <div className="text-sm font-neuton">Increase in User Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2 font-poppins">40%</div>
                <div className="text-sm font-neuton">Reduction in Support Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2 font-poppins">4.7/5</div>
                <div className="text-sm font-neuton">User Satisfaction Score</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 font-neuton text-lg">
              <p>
                <strong className="font-poppins text-black dark:text-white">Long-term Impact:</strong> The design system created for this project 
                has been adopted across 12 other products within the company, saving an estimated 
                200+ design and development hours per quarter.
              </p>
              <p>
                <strong className="font-poppins text-black dark:text-white">Recognition:</strong> The project won the company's Innovation Award 
                and was featured in UX Design Weekly as a case study in successful enterprise redesign.
              </p>
            </div>
          </section>
        </motion.div>

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-poppins">Next Project</p>
              <h3 className="text-2xl font-light text-black dark:text-white font-poppins">{nextProject.title}</h3>
            </div>
            <Link
              to={`/projects/${nextProject.id}`}
              className="group inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-poppins font-medium"
            >
              View Project
              <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
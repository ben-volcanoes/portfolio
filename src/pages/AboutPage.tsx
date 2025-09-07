import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const AboutPage: React.FC = () => {
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
          <h1 className="text-6xl lg:text-8xl font-light text-black mb-8 leading-[0.9] font-poppins tracking-tight">
            About
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-neuton">
                  I'm a product designer with 10+ years of experience creating meaningful digital experiences 
                  for startups and Cac 40, SBF250 companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-neuton">
                  My passion lies in solving complex problems through human-centered design and strategic thinking. 
                  Currently, I lead design at TechFlow, where I've helped increase user engagement by 150% 
                  and reduce support tickets by 40% through thoughtful UX improvements and comprehensive 
                  design system implementation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-neuton">
                  When I'm not designing, you can find me exploring new coffee shops, hiking local trails, 
                  or experimenting with film photography. I believe the best designs come from diverse 
                  experiences and perspectives.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8 font-poppins">Experience</h2>
                <div className="space-y-12">
                  {[
                    {
                      role: 'Senior Product Designer',
                      company: 'TechFlow',
                      period: '2022 - Present',
                      description: 'Leading design for B2B SaaS platform, managing design system, and mentoring junior designers. Increased user engagement by 150% through strategic UX improvements.'
                    },
                    {
                      role: 'Product Designer',
                      company: 'PayFit',
                      period: '2020 - 2022',
                      description: 'Designed mobile and web applications for fintech and healthcare clients. Collaborated with cross-functional teams to deliver user-centered solutions.'
                    },
                    {
                      role: 'UX Designer',
                      company: 'StartupXYZ',
                      period: '2018 - 2020',
                      description: 'First design hire, established design processes and created the company\'s first design system. Helped scale the product from 1K to 100K users.'
                    }
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-light text-black font-poppins">{job.role}</h3>
                        <span className="text-sm text-gray-500 font-neuton">{job.period}</span>
                      </div>
                      <p className="text-gray-600 mb-2 font-neuton font-medium">{job.company}</p>
                      <p className="text-gray-600 leading-relaxed font-neuton">{job.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12"
            >
              {/* Profile Image */}
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-poppins">Location</h3>
                  <p className="text-gray-700 font-neuton">Paris (FR)</p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-poppins">Status</h3>
                  <p className="text-gray-700 font-neuton">Available for new projects</p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-poppins">Tools & Skills</h3>
                  <div className="space-y-2 text-gray-700 font-neuton">
                    <p>Figma, Sketch, Principle, Framer</p>
                    <p>User Research, Prototyping</p>
                    <p>Design Systems, Accessibility</p>
                    <p>Frontend Development</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="group inline-flex items-center text-black hover:text-gray-600 transition-colors font-poppins font-medium">
                    <Download size={16} className="mr-2" />
                    Download Resume
                    <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-200 pt-16 mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-black mb-6 font-poppins">Let's work together</h2>
              <p className="text-gray-600 leading-relaxed font-neuton text-lg">
                Always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:hello@sarahchen.design"
                className="group inline-flex items-center text-black hover:text-gray-600 transition-colors font-poppins"
              >
                hello@sarahchen.design
                <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex space-x-6 text-sm text-gray-500 font-neuton">
                <a href="https://linkedin.com/in/sarahchen" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
                <a href="https://dribbble.com/sarahchen" className="hover:text-black transition-colors">
                  Dribbble
                </a>
                <a href="https://twitter.com/sarahchen" className="hover:text-black transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
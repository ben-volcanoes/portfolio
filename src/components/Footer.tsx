import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-3xl font-light text-black dark:text-white mb-6 font-poppins">Let's work together</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-neuton text-lg mb-8">
              Always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate.
            </p>
            <a
              href="mailto:hello@sarahchen.design"
              className="group inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-poppins font-medium text-lg"
            >
              hello@sarahchen.design
              <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="lg:pt-8">
            <div className="flex space-x-8 text-sm text-gray-500 dark:text-gray-400 font-neuton mb-8">
              <a href="https://linkedin.com/in/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://dribbble.com/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                Dribbble
              </a>
              <a href="https://twitter.com/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://github.com/sarahchen" className="hover:text-black dark:hover:text-white transition-colors">
                GitHub
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-poppins text-sm"
            >
              Back to top
              <ArrowUp size={16} className="ml-2 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 font-neuton">
          <p>© 2025 Sarah Chen. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Designed & developed with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
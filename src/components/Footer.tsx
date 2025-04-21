import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
            <p className="text-gray-400">{personalInfo.shortBio}</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm mr-2">
              Made with
            </p>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <p className="text-gray-400 text-sm ml-2">
              for my Bachelor's End Review
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
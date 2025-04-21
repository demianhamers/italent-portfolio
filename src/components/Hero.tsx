import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (nameRef.current) {
      observer.observe(nameRef.current);
    }
    
    return () => {
      if (nameRef.current) {
        observer.unobserve(nameRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-black/30 z-0"
        style={{
          backgroundImage: `url(${personalInfo.profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-200 mb-2 opacity-0 animate-fadeIn animation-delay-200">
            Hello, I'm
          </p>
          <h1 
            ref={nameRef} 
            className="text-4xl md:text-6xl font-bold mb-4 opacity-0"
          >
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-6 opacity-0 animate-fadeIn animation-delay-400">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-blue-50 mb-8 opacity-0 animate-fadeIn animation-delay-600 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
          
          <div className="flex justify-center space-x-4 opacity-0 animate-fadeIn animation-delay-800">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub className="w-6 h-6" />
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={personalInfo.socialLinks.twitter}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
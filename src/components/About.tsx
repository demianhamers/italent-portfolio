import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative overflow-hidden rounded-lg shadow-xl group">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">{personalInfo.name}</h3>
                  <p className="text-blue-100">{personalInfo.title}</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a passionate Computer Science student currently completing my bachelor's degree. 
                My journey in technology has been driven by curiosity and a desire to create meaningful 
                solutions that solve real-world problems. Throughout my academic career, I've focused on 
                building strong foundations in software development, algorithms, and data structures.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Beyond the classroom, I've engaged in numerous hackathons, coding competitions, and personal 
                projects to apply my knowledge and expand my skills. I believe in continuous learning and am 
                always exploring new technologies and methodologies to improve my craft.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-full mr-3">
                    <User className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Name</h4>
                    <p className="text-gray-700 font-medium">{personalInfo.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-full mr-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p className="text-gray-700 font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-full mr-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Email</h4>
                    <p className="text-gray-700 font-medium">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-full mr-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Phone</h4>
                    <p className="text-gray-700 font-medium">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
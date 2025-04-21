import React, { useEffect, useRef } from 'react';
import { educationData } from '../data/education';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
  
  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref) {
        observer.observe(ref);
      }
      
      return observer;
    });
    
    return () => {
      observers.forEach((observer, index) => {
        if (timelineRefs.current[index]) {
          observer.unobserve(timelineRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills in computer science.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline items */}
            {educationData.map((education, index) => (
              <div 
                key={education.id}
                ref={el => timelineRefs.current[index] = el}
                className={`relative flex flex-col md:flex-row md:justify-between mb-16 opacity-0 translate-y-10 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                
                {/* Content */}
                <div className={`md:w-5/12 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:text-right md:pl-0 md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{education.degree}</h3>
                      <div className="flex items-center mb-4 text-gray-600">
                        <span className="font-medium">{education.institution}</span>
                      </div>
                      
                      <div className="flex items-center mb-2 text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{education.startDate} - {education.endDate}</span>
                      </div>
                      
                      <div className="flex items-center mb-4 text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{education.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{education.description}</p>
                      
                      {education.achievements.length > 0 && (
                        <div>
                          <h4 className="flex items-center text-gray-700 font-medium mb-2">
                            <Award className="w-4 h-4 mr-2 text-blue-500" />
                            Achievements
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                            {education.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`hidden md:block md:w-3/12 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <div className="rounded-lg overflow-hidden shadow-lg h-40 mb-4">
                    <img 
                      src={education.logo} 
                      alt={education.institution}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
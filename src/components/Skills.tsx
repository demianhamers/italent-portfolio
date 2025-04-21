import React, { useEffect, useRef, useState } from 'react';
import { skillsData } from '../data/skills';
import { ChevronDown } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

  const renderProficiencyBar = (proficiency: number) => {
    const percentage = (proficiency / 5) * 100;
    
    return (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const activeSkills = skillsData.find(category => category.id === activeCategory)?.skills || [];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technical skills and competencies I've developed through academic and personal projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-wrap">
              {skillsData.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeSkills.map((skill, index) => (
                  <div 
                    key={skill.id}
                    ref={el => skillRefs.current[index] = el}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-gray-700 font-medium">{skill.name}</h3>
                      <span className="text-sm text-gray-500">
                        {skill.proficiency}/5
                      </span>
                    </div>
                    {renderProficiencyBar(skill.proficiency)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Relevant Skills</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Team Collaboration", "Agile Methodology", "Responsive Design", 
                "API Development", "Cross-Browser Testing", "Version Control",
                "Technical Documentation", "Testing & Debugging", "Code Review"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
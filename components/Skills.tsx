import React from 'react';
import Section from './Section';
import { Code2, Brain, Database, Box, Cpu } from 'lucide-react';
import { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
    ]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Computer Vision (YOLO, OCR)", level: 85 },
      { name: "NLP", level: 70 },
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      { name: "SQL", level: 85 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "ETL Concepts", level: 75 },
    ]
  },
  {
    title: "Frameworks & Tools",
    icon: Box,
    skills: [
      { name: "Git & Linux", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Flask", level: 80 },
      { name: "React", level: 70 },
    ]
  },
  {
    title: "AI Tools",
    icon: Cpu,
    skills: [
      { name: "OpenCV", level: 85 },
      { name: "Stable Diffusion", level: 75 },
      { name: "Ollama", level: 70 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Core competencies and technological proficiency.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <div key={idx} className="bg-panel border border-white/5 p-6 rounded-lg hover:border-cyan/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/5 rounded text-cyan">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-light">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple to-cyan" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
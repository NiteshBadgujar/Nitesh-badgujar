import React from 'react';
import Section from './Section';
import { Award, Users, GraduationCap } from 'lucide-react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: "AIML Lead",
    organization: "Technical Community / College Club",
    description: "Leading a team of students in exploring AI/ML technologies, organizing workshops, and mentoring juniors in technical projects.",
    type: "Leadership"
  },
  {
    role: "B.Tech in Information Technology",
    organization: "Matoshri College of Engineering",
    period: "2024 - 2028",
    description: "Pursuing undergraduate degree with a focus on Data Science and Artificial Intelligence. Active participant in technical hackathons.",
    type: "Education"
  },
  {
    role: "Hackathon Participant",
    organization: "Various Tech Events",
    description: "Participated in multiple coding competitions and hackathons, solving problems related to real-time data processing and AI.",
    type: "Experience"
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Trajectory" subtitle="Leadership, Education, and Milestones.">
      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
        {experienceData.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-0 p-2 bg-bg border border-cyan/30 rounded-full text-cyan group-hover:scale-110 group-hover:border-cyan transition-all duration-300 shadow-[0_0_10px_rgba(0,246,255,0.2)]">
              {item.type === 'Education' ? <GraduationCap size={20} /> : item.type === 'Leadership' ? <Users size={20} /> : <Award size={20} />}
            </div>
            
            <div className="bg-panel/50 border border-white/5 p-6 rounded-lg hover:bg-panel transition-colors duration-300">
               <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                 <h3 className="text-xl font-heading font-bold text-light">{item.role}</h3>
                 {item.period && (
                   <span className="text-sm font-mono text-cyan/70 bg-cyan/10 px-2 py-1 rounded">{item.period}</span>
                 )}
               </div>
               <h4 className="text-purple font-medium mb-3">{item.organization}</h4>
               <p className="text-muted text-sm leading-relaxed max-w-2xl">
                 {item.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
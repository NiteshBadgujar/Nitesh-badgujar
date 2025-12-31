import React from 'react';
import Section from './Section';
import { User, MapPin, Calendar, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Unlocking intelligence through code and data.">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Profile Card */}
        <div className="md:col-span-1 bg-panel p-6 rounded-lg border border-purple/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] relative group">
           <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-cyan opacity-20 group-hover:opacity-40 transition duration-500 blur rounded-lg"></div>
           <div className="relative bg-panel rounded-lg h-full flex flex-col items-center text-center p-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan to-purple p-1 mb-4">
                <div className="w-full h-full rounded-full bg-bg flex items-center justify-center overflow-hidden">
                   <User size={48} className="text-muted" /> 
                   {/* Replace with actual image if available */}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">Nitesh Badgujar</h3>
              <p className="text-cyan font-mono text-sm mb-4">@AI_Researcher</p>
              
              <div className="space-y-3 text-sm text-left w-full mt-4">
                 <div className="flex items-center gap-3 text-muted">
                    <MapPin size={16} className="text-purple" /> Nashik, Maharashtra
                 </div>
                 <div className="flex items-center gap-3 text-muted">
                    <Calendar size={16} className="text-purple" /> Class of 2028
                 </div>
                 <div className="flex items-center gap-3 text-muted">
                    <BookOpen size={16} className="text-purple" /> B.Tech IT
                 </div>
              </div>
           </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <User size={120} />
          </div>
          
          <h3 className="text-2xl font-display text-cyan mb-6">Hello, World.</h3>
          
          <div className="space-y-4 text-light/90 leading-relaxed font-sans text-lg">
            <p>
              I am a <span className="text-cyan font-semibold">B.Tech Information Technology</span> student at Matoshri College of Engineering, graduating in 2028.
            </p>
            <p>
              My passion lies at the intersection of <span className="text-purple font-semibold">Artificial Intelligence, Machine Learning, and Data Engineering</span>. I am driven by the challenge of solving real-world problems using data-driven insights and intelligent systems.
            </p>
            <p>
              Whether it's building neural networks from scratch, architecting data pipelines, or experimenting with the latest Generative AI models, I am constantly exploring the frontiers of technology. I enjoy building AI-based projects, working with modern tools, and continuously expanding my technical knowledge base.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
             <div className="px-4 py-2 bg-panel border border-green/30 rounded text-green text-xs font-mono">
                Running: Learning_Loop.py
             </div>
             <div className="px-4 py-2 bg-panel border border-cyan/30 rounded text-cyan text-xs font-mono">
                Status: Available for Collaboration
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
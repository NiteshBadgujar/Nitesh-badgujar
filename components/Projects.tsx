import React from 'react';
import Section from './Section';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: "AI Road Damage Detection",
    description: "Automated system for detecting road cracks and potholes using Deep Learning, aimed at improving infrastructure maintenance.",
    tags: ["Computer Vision", "Python", "Deep Learning"],
    githubUrl: "https://github.com/NiteshBadgujar",
  },
  {
    title: "Manga Generator (GenAI)",
    description: "A generative AI application capable of creating manga-style artwork from text prompts using stable diffusion models.",
    tags: ["Generative AI", "Stable Diffusion", "Python"],
    githubUrl: "https://github.com/NiteshBadgujar",
  },
  {
    title: "OCR System with YOLOv8",
    description: "High-accuracy optical character recognition system integrating YOLOv8 for detection and TrOCR for text recognition.",
    tags: ["YOLOv8", "TrOCR", "OCR", "Computer Vision"],
    githubUrl: "https://github.com/NiteshBadgujar",
  },
  {
    title: "AI Image Super-Resolution",
    description: "Enhances low-resolution images to high-definition using GANs (Generative Adversarial Networks).",
    tags: ["GANs", "Image Processing", "Deep Learning"],
    githubUrl: "https://github.com/NiteshBadgujar",
  },
  {
    title: "Data ETL Pipeline",
    description: "A mini data engineering project implementing Extract, Transform, Load processes on complex datasets.",
    tags: ["ETL", "SQL", "Pandas", "Data Engineering"],
    githubUrl: "https://github.com/NiteshBadgujar",
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Deploying intelligence into production.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className="group relative bg-panel rounded-xl overflow-hidden border border-white/5 hover:border-cyan/50 transition-all duration-300">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-bg rounded-lg text-cyan group-hover:text-white group-hover:bg-cyan/20 transition-colors">
                  <Folder size={24} />
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-light mb-2 group-hover:text-cyan transition-colors">{project.title}</h3>
              
              <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-white/5 text-xs font-mono text-cyan/80 rounded-full border border-cyan/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
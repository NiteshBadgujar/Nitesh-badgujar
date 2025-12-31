import React from 'react';
import Section from './Section';
import { Mail, Github, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Establish Connection" subtitle="Available for collaborations and opportunities.">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-display text-white mb-6">Get In Touch</h3>
          <p className="text-muted mb-8 leading-relaxed">
             I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-panel rounded-full flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-black transition-all duration-300">
                 <Mail size={20} />
               </div>
               <div>
                 <span className="block text-xs text-muted uppercase tracking-wider">Email</span>
                 <a href="mailto:niteshbadgujar32@gmail.com" className="text-light hover:text-cyan transition-colors">niteshbadgujar32@gmail.com</a>
               </div>
            </div>

            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-panel rounded-full flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300">
                 <Github size={20} />
               </div>
               <div>
                 <span className="block text-xs text-muted uppercase tracking-wider">GitHub</span>
                 <a href="https://github.com/NiteshBadgujar" target="_blank" rel="noopener noreferrer" className="text-light hover:text-purple transition-colors">github.com/NiteshBadgujar</a>
               </div>
            </div>

            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-panel rounded-full flex items-center justify-center text-green group-hover:bg-green group-hover:text-black transition-all duration-300">
                 <MapPin size={20} />
               </div>
               <div>
                 <span className="block text-xs text-muted uppercase tracking-wider">Location</span>
                 <span className="text-light">Nashik, Maharashtra, India</span>
               </div>
            </div>
          </div>
        </div>

        <form className="bg-panel p-8 rounded-xl border border-white/5 space-y-4" onSubmit={(e) => e.preventDefault()}>
           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Name</label>
             <input type="text" className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" placeholder="Enter your name" />
           </div>
           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Email</label>
             <input type="email" className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" placeholder="Enter your email" />
           </div>
           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Message</label>
             <textarea rows={4} className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" placeholder="Your message..."></textarea>
           </div>
           <button className="w-full py-3 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
             Send Message <Send size={16} />
           </button>
        </form>

      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center">
         <p className="font-mono text-sm text-muted mb-2">
           “Learning never stops — it just evolves.”
         </p>
         <p className="text-xs text-gray-600">
           © {new Date().getFullYear()} Nitesh Dipak Badgujar. All rights reserved.
         </p>
      </div>
    </Section>
  );
};

export default Contact;
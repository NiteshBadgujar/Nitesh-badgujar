import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section from './Section';
import { Mail, Github, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');

    try {
      // Send main notification email to you
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to the sender
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          formRef.current!,
          EMAILJS_PUBLIC_KEY
        );
      }

      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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

        <form 
          ref={formRef}
          className="bg-panel p-8 rounded-xl border border-white/5 space-y-4 relative overflow-hidden" 
          onSubmit={handleSubmit}
        >
           {/* Success Overlay */}
           {status === 'success' && (
             <div className="absolute inset-0 bg-panel/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 animate-fadeIn">
               <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center mb-4">
                 <CheckCircle className="text-green" size={32} />
               </div>
               <h4 className="text-xl font-display text-white mb-2">Message Sent!</h4>
               <p className="text-muted text-sm text-center px-4">Thank you for reaching out. I'll get back to you soon.</p>
             </div>
           )}

           {/* Error Overlay */}
           {status === 'error' && (
             <div className="absolute inset-0 bg-panel/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 animate-fadeIn">
               <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                 <AlertCircle className="text-red-500" size={32} />
               </div>
               <h4 className="text-xl font-display text-white mb-2">Oops!</h4>
               <p className="text-muted text-sm text-center px-4">{errorMessage}</p>
               <button 
                 type="button"
                 onClick={() => setStatus('idle')}
                 className="mt-4 text-cyan text-sm hover:underline"
               >
                 Try Again
               </button>
             </div>
           )}

           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Name</label>
             <input 
               type="text" 
               name="from_name"
               value={formData.from_name}
               onChange={handleChange}
               className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" 
               placeholder="Enter your name" 
             />
           </div>
           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Email</label>
             <input 
               type="email" 
               name="from_email"
               value={formData.from_email}
               onChange={handleChange}
               className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" 
               placeholder="Enter your email" 
             />
           </div>
           <div>
             <label className="block text-xs font-mono text-cyan mb-2">Message</label>
             <textarea 
               rows={4} 
               name="message"
               value={formData.message}
               onChange={handleChange}
               className="w-full bg-bg border border-white/10 rounded p-3 text-light focus:outline-none focus:border-cyan/50 transition-colors" 
               placeholder="Your message..."
             ></textarea>
           </div>
           <button 
             type="submit"
             disabled={status === 'loading'}
             className="w-full py-3 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {status === 'loading' ? (
               <>
                 <Loader2 size={16} className="animate-spin" />
                 Sending...
               </>
             ) : (
               <>
                 Send Message <Send size={16} />
               </>
             )}
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
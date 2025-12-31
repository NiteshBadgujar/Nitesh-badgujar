import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = '', children }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan via-white to-purple mb-4">
                <span className="font-mono text-cyan text-xl mr-4">&gt;</span>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted font-sans text-lg max-w-2xl border-l-2 border-purple/50 pl-4">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
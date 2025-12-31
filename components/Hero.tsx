import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Terminal, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullSubtitle = "AI & ML Enthusiast | Data Engineer Aspirant | B.Tech IT Student";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullSubtitle.slice(0, index + 1));
      index++;
      if (index > fullSubtitle.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(100, (width * height) / 10000);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0b0f14';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00f6ff';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 246, 255, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel border border-cyan/20 text-cyan text-sm font-mono mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_10px_#22c55e]"></span>
          System Online: Ready to Innovate
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-light to-muted tracking-tight">
          Nitesh Dipak <span className="text-cyan">Badgujar</span>
        </h1>

        <div className="h-8 md:h-10 mb-8 font-mono text-purple md:text-xl">
          <Terminal className="inline-block w-5 h-5 mr-2 mb-1" />
          {typedText}
          <span className="animate-blink">_</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="group relative px-8 py-3 bg-cyan/10 border border-cyan/50 text-cyan font-semibold rounded hover:bg-cyan/20 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded bg-cyan/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a 
            href="/resume.pdf" 
            className="group px-8 py-3 bg-panel border border-muted/30 text-light rounded hover:border-light transition-all duration-300 flex items-center gap-2"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted/50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
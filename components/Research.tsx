import React from 'react';
import Section from './Section';
import { Microscope, Zap, Layers, Network } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <Section id="research" title="Research Lab" subtitle="Current areas of exploration and analysis.">
      <div className="bg-panel border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        {/* Fake Browser/Terminal Header */}
        <div className="bg-bg border-b border-white/10 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <div className="ml-4 px-3 py-1 bg-black/50 rounded text-xs font-mono text-muted flex-grow">
            user@nitesh-lab:~/research-interests
          </div>
        </div>

        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-cyan mb-4 border-b border-cyan/20 pb-2 inline-block">
              // Active_Modules
            </h3>
            
            <div className="flex gap-4">
              <div className="mt-1 text-purple"><Network /></div>
              <div>
                <h4 className="font-bold text-light">Deep Learning Architectures</h4>
                <p className="text-sm text-muted mt-1">Investigating efficient neural network structures for edge devices and low-latency inference.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-green"><Layers /></div>
              <div>
                <h4 className="font-bold text-light">Computer Vision Systems</h4>
                <p className="text-sm text-muted mt-1">Real-time object detection and segmentation for autonomous systems using YOLO and Transformers.</p>
              </div>
            </div>

             <div className="flex gap-4">
              <div className="mt-1 text-cyan"><Zap /></div>
              <div>
                <h4 className="font-bold text-light">Generative AI</h4>
                <p className="text-sm text-muted mt-1">Exploring Latent Diffusion Models and LLM fine-tuning for creative and functional applications.</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-6 rounded-lg font-mono text-sm border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-20"><Microscope size={64} /></div>
             <p className="text-green mb-2">$ cat research_log.txt</p>
             <div className="space-y-2 text-gray-400">
               <p>&gt; Initializing Data Engineering pipelines...</p>
               <p>&gt; <span className="text-yellow-500">Warning:</span> High dimensionality detected.</p>
               <p>&gt; Optimizing hyperparameters for vision model...</p>
               <p>&gt; Exploring ETL best practices for large-scale datasets.</p>
               <p>&gt; <span className="text-cyan">Status:</span> Continuous Learning Mode [ON]</p>
               <p className="animate-pulse">_</p>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Research;
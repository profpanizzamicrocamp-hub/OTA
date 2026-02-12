import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-400 font-mono font-semibold tracking-wider uppercase mb-3">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Soluções de Ponta a Ponta</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Combinamos engenharia de hardware com desenvolvimento de software moderno para criar ecossistemas inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl glass-card hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 hover:border-brand-500/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={64} />
              </div>

              <div className="w-14 h-14 rounded-xl bg-brand-900/50 flex items-center justify-center mb-6 text-brand-400 group-hover:text-white group-hover:bg-brand-500 transition-colors duration-300 shadow-lg shadow-brand-900/20">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6 w-full h-0.5 bg-slate-700/50 overflow-hidden rounded-full">
                <div className="w-0 h-full bg-brand-500 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
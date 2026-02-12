import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-dark-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-dark-900/40 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0f172a_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 mb-8 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide">TECNOLOGIA DE PONTA</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 translate-y-4">
          Conectando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Mundo Físico</span><br />
          ao Universo Digital
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0 translate-y-4">
          Especialistas em desenvolvimento de aplicativos para Sistemas Embarcados e IoT. 
          Transformamos hardware complexo em experiências de usuário fluidas e conectadas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
          <a 
            href="#contact"
            className="group px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Iniciar Projeto
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services"
            className="px-8 py-4 bg-transparent border border-slate-600 hover:border-brand-400 text-slate-300 hover:text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-800/50"
          >
            <Cpu size={20} />
            Nossas Soluções
          </a>
        </div>

        {/* Floating Code/Chip Decor */}
        <div className="mt-20 relative h-64 w-full max-w-4xl mx-auto hidden md:block animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-brand-500/10 to-transparent rounded-t-3xl border-t border-brand-500/20 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
                <div className="grid grid-cols-3 gap-8 p-8 opacity-40">
                    <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
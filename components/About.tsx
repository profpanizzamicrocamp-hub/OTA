import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FACADE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-400 font-mono font-semibold tracking-wider uppercase">Sobre Nós</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Engenharia de Precisão para o Futuro Conectado
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Somos uma empresa especializada no ciclo completo de desenvolvimento de produtos IoT. 
                Desde a concepção do hardware embarcado até o aplicativo que o usuário final utiliza, 
                garantimos integração perfeita, segurança e escalabilidade.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Desenvolvimento Full-Stack IoT (Firmware + Cloud + Mobile)",
                "Consultoria especializada em microeletrônica",
                "Metodologias ágeis com foco em MVP e Go-to-Market",
                "Suporte contínuo e evolução de produto"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500 flex-shrink-0" size={24} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <div className="inline-block p-4 rounded-xl glass-card border-l-4 border-l-brand-500">
                  <p className="text-sm text-slate-400 font-mono">
                    "Nossa missão é tornar a complexidade do hardware invisível, entregando soluções simples e poderosas."
                  </p>
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative group perspective-1000">
             {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-dark-800">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                <img 
                    src={FACADE_URL} 
                    alt="Fachada da Empresa" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 z-20 glass-card px-6 py-3 rounded-lg shadow-xl backdrop-blur-xl">
                    <p className="text-xs text-brand-300 uppercase font-bold tracking-widest mb-1">Localização</p>
                    <p className="text-white font-semibold">Sede de Inovação</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
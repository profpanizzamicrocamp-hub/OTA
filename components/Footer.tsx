import React from 'react';
import { Cpu, Github, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-brand-500" size={32} />
              <span className="text-xl font-bold text-white tracking-tighter">
                OTA<span className="text-brand-400"> - Desenvolvimento</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Transformando ideias em dispositivos inteligentes. Especialistas em IoT, Firmware e Soluções Mobile integradas.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-brand-400 transition-colors">Início</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-brand-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-400 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-500 cursor-not-allowed">Política de Privacidade</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Termos de Uso</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
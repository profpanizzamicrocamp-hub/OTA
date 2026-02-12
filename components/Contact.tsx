import React from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Vamos Construir o Futuro Juntos?</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Tem um projeto em mente? Precisa de uma consultoria especializada em IoT? 
              Entre em contato conosco e transforme sua ideia em realidade.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Nosso Endereço</h4>
                  <p className="text-slate-400 mt-1">{CONTACT_INFO.addressPlaceholder}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Contato Rápido</h4>
                  <p className="text-slate-400 mt-1">{CONTACT_INFO.phone}</p>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsappClean}`} className="text-brand-400 text-sm hover:underline mt-1 block">
                    Iniciar conversa no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email</h4>
                  <p className="text-slate-400 mt-1">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-900/50 to-purple-900/50 border border-brand-500/20">
                <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare size={20} className="text-brand-400"/> Consultoria Online
                </h5>
                <p className="text-slate-300 text-sm mb-4">
                    Realizamos atendimentos remotos para todo o Brasil. Agende uma call técnica inicial gratuita.
                </p>
                <a 
                   href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de agendar uma consultoria online.`}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    Agendar Agora
                </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-dark-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="voce@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Detalhes do Projeto</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-dark-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
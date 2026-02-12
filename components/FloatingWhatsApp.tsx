import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/55${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-dark-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 animate-bounce hover:animate-none">
        <MessageCircle size={32} fill="white" className="text-white" />
      </div>
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></div>
    </a>
  );
};

export default FloatingWhatsApp;
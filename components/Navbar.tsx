import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LOGO_URL, WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden shadow-brand-500/20 shadow-lg">
                <img 
                    src={LOGO_URL} 
                    alt="Logo Empresa" 
                    className="w-full h-full object-contain mix-blend-multiply" 
                />
            </div>
            <span className={`font-mono font-bold text-xl tracking-tighter ${scrolled ? 'text-white' : 'text-white'}`}>
              OTA<span className="text-brand-400"> - Desenvolvimento</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={`https://wa.me/55${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800 shadow-xl border-t border-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-brand-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
             href={`https://wa.me/55${WHATSAPP_NUMBER}`}
             className="text-brand-400 font-semibold block px-3 py-2 rounded-md text-base"
          >
             Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
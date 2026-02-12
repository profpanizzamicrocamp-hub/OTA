import { Cpu, Wifi, Smartphone, Globe, Code, Server } from 'lucide-react';
import { ServiceItem, ContactInfo } from './types';

export const COMPANY_NAME = "OTA - Desenvolvimento";
export const WHATSAPP_NUMBER = "11973689467";

// Converted Google Drive links to direct content links
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1eekiNFXD-W1dIjoRt3VfDL9tcyMCWpo0";
export const FACADE_URL = "https://lh3.googleusercontent.com/d/1I5MAgkRxzQDt9v42lK9YlOAH7a55QfCv";

export const CONTACT_INFO: ContactInfo = {
  phone: "+55 (11) 97368-9467",
  whatsappClean: "5511973689467",
  email: "profpanizza.microcamp@gmail.com",
  addressPlaceholder: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100" // Placeholder address
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Sistemas Embarcados",
    description: "Desenvolvimento de firmware otimizado para microcontroladores (STM32, ESP32, AVR) com foco em desempenho e baixo consumo.",
    icon: Cpu
  },
  {
    title: "Conectividade IoT",
    description: "Soluções completas de Internet das Coisas integrando hardware a plataformas em nuvem via MQTT, HTTP e CoAP.",
    icon: Wifi
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para controle e monitoramento de dispositivos em tempo real, com interfaces intuitivas.",
    icon: Smartphone
  },
  {
    title: "Consultoria Online",
    description: "Diagnóstico técnico e arquitetura de soluções remotamente. Agende uma reunião para discutir seu projeto.",
    icon: Globe
  },
  {
    title: "Prototipagem Rápida",
    description: "Do conceito ao MVP funcional. Aceleramos o desenvolvimento do hardware e software para validação de mercado.",
    icon: Code
  },
  {
    title: "Integração Backend",
    description: "Desenvolvimento de APIs robustas e dashboards administrativos para gestão do seu parque de dispositivos.",
    icon: Server
  }
];
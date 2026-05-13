export type Testimonial = {
  id: string;
  quote: string;
  result: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  rating: 5 | 4;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'El sitio web quedó mejor de lo que imaginaba, y estuvo listo en 4 días. En dos meses, nuestras reservas online se triplicaron. Un diseño que convence antes de decir una palabra.',
    result: '+3x reservas',
    author: 'Rafaela M.',
    role: 'Fundadora',
    company: 'Clínica Lumina',
    initials: 'RM',
    color: '#e63946',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '2',
    quote: 'WhatsApp era un caos: clientes sin respuesta, confirmaciones perdidas. Ahora todo va automáticamente al sistema. El equipo trabaja sin prisas y el cliente recibe su confirmación en segundos.',
    result: '70% menos trabajo manual',
    author: 'Carlos F.',
    role: 'Socio Gerente',
    company: 'Distribuidora Roraima',
    initials: 'CF',
    color: '#25d366',
    rating: 5,
    service: 'Automatización',
  },
  {
    id: '3',
    quote: 'Los contraté pensando que era solo un sitio web. Recibí una máquina de cerrar negocios. En 3 semanas ya había recuperado la inversión con nuevos contratos que llegaron a través del sitio.',
    result: 'ROI en 3 semanas',
    author: 'Marcos V.',
    role: 'CEO',
    company: 'Constructora Nova Era',
    initials: 'MV',
    color: '#e63946',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '4',
    quote: 'La tienda se ve hermosa y funciona perfectamente en el móvil. Estamos vendiendo a múltiples estados; nunca imaginamos llegar tan lejos con nuestros productos artesanales.',
    result: 'Ventas a múltiples estados',
    author: 'Maria P.',
    role: 'Propietaria',
    company: 'Artesanías del Bosque',
    initials: 'MP',
    color: '#f59e0b',
    rating: 5,
    service: 'E-commerce',
  },
  {
    id: '5',
    quote: 'Mi WhatsApp se convirtió en un robot de ventas. Responde, califica al cliente y envía el enlace de pago de inmediato. Solo intervengo para cerrar el trato que ya está preparado.',
    result: '4x más leads calificados',
    author: 'Tatiane A.',
    role: 'Gerente',
    company: 'Red de Farmacias del Norte',
    initials: 'TA',
    color: '#25d366',
    rating: 5,
    service: 'Automatización',
  },
  {
    id: '6',
    quote: 'Necesitaba un CRM integrado en mi proceso. Lo entregaron en 12 días, funciona a la perfección y el soporte resolvió todo al instante. Nunca había visto tal agilidad.',
    result: 'Entregado en 12 días',
    author: 'Bruno L.',
    role: 'Director Comercial',
    company: 'Inmobiliaria Panorama',
    initials: 'BL',
    color: '#e63946',
    rating: 5,
    service: 'Sistemas Web',
  },
  {
    id: '7',
    quote: 'Tenía miedo de gastar dinero sin ver resultados. Pedí una garantía y me la dieron. Al ver el diseño en la primera revisión, supe que funcionaría. Hoy, nuestro restaurante está lleno los viernes gracias al sitio.',
    result: 'Totalmente reservado',
    author: 'João T.',
    role: 'Dueño',
    company: 'Restaurante Toka',
    initials: 'JT',
    color: '#f59e0b',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '8',
    quote: 'Mi clínica veterinaria vio un aumento del 60% en las citas después del nuevo sitio web. Google nos muestra ahora y WhatsApp está lleno. No sabía que un sitio web podía cambiar tanto el negocio.',
    result: '+60% en citas',
    author: 'Dra. Camila R.',
    role: 'Directora Clínica',
    company: 'Hospital Veterinario',
    initials: 'CR',
    color: '#10b981',
    rating: 5,
    service: 'Sitios Web',
  },
];

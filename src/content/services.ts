export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  deliverables: string[];
  stack: string[];
  highlights: { icon: string; label: string }[];
  isCore: boolean;
  packages: Package[];
  faq: { q: string; a: string }[];
};

export type Package = {
  name: string;
  from: string;
  deadline: string;
  features: string[];
  highlighted?: boolean;
};

export const services: Service[] = [
  {
    slug: 'websites',
    number: '01',
    title: 'Sitios Web',
    tagline: 'Cualquier tipo de sitio web, construido desde cero con la mejor calidad.',
    summary: 'Desde el briefing hasta el lanzamiento: UX, diseño, código y rendimiento en un solo lugar.',
    description:
      'Creamos cualquier tipo de sitio web: institucional, portafolio, landing page, blog o sitio de servicios. Cada proyecto comienza desde cero, sin plantillas. El resultado: un sitio web rápido y hermoso que realmente representa a su marca.',
    deliverables: [
      'Sitio web institucional o landing page',
      'Diseño personalizado (sin plantillas)',
      'Desarrollo en Next.js o WordPress',
      'SEO técnico básico incluido',
      'Responsivo para móviles y escritorio',
      'Entrega con capacitación',
    ],
    stack: ['Next.js', 'WordPress', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: [
      { icon: 'Zap', label: 'Carga Rápida' },
      { icon: 'Search', label: 'SEO Incluido' },
      { icon: 'Smartphone', label: 'Mobile-first' },
      { icon: 'Palette', label: 'Diseño Exclusivo' },
      { icon: 'Shield', label: 'Seguro y Estable' },
      { icon: 'RefreshCw', label: 'Soporte Post-lanzamiento' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Landing Page',
        from: 'US$300',
        deadline: '1–5 días hábiles',
        features: [
          '1 página completa',
          'Diseño exclusivo',
          'Formulario de contacto',
          'Responsivo para móviles',
          'Despliegue incluido',
        ],
      },
      {
        name: 'Sitio Web Completo',
        from: 'US$600',
        deadline: '1–5 días hábiles',
        features: [
          'Hasta 6 páginas',
          'Diseño exclusivo',
          'SEO básico',
          'Blog opcional',
          'Panel de administración',
          '30 días de soporte',
        ],
        highlighted: true,
      },
      {
        name: 'Proyecto Personalizado',
        from: 'Bajo pedido',
        deadline: 'A definir',
        features: [
          'Alcance ilimitado',
          'Integraciones personalizadas',
          'E-commerce opcional',
          'Soporte extendido',
          'SLA garantizado',
        ],
      },
    ],
    faq: [
      { q: '¿Entregan el código fuente?', a: 'Sí. Todo el código es suyo al final del proyecto, sin compromisos ni bloqueos de plataforma.' },
      { q: '¿Puedo actualizar el sitio web yo mismo?', a: 'Sí. Configuramos un panel sencillo donde puede editar textos e imágenes sin necesidad de un desarrollador.' },
      { q: '¿Aparecerá el sitio en Google?', a: 'Sí. El SEO técnico básico está incluido en todos los planes: título, descripción, sitemap y optimización de velocidad.' },
      { q: '¿Cuál es la diferencia entre una Landing Page y un Sitio Web Completo?', a: 'Una Landing Page es una sola página enfocada en la conversión. Un Sitio Web Completo tiene múltiples páginas y un sistema de gestión de contenidos.' },
    ],
  },
  {
    slug: 'systems',
    number: '02',
    title: 'Sistemas Web',
    tagline: 'Sistemas de reserva personalizados, portales y tableros.',
    summary: 'Sistemas a medida que resuelven problemas reales para su negocio.',
    description:
      'Desarrollamos sistemas web personalizados: agendamiento online, tableros de administración, portales de clientes, registro de productos y control de inventario sencillo. Si tiene un proceso manual que podría ser digital, lo construimos para usted.',
    deliverables: [
      'Sistema de reservas online',
      'Tablero de administración',
      'Portal de clientes / área privada',
      'Registro y gestión de datos',
      'Informes y tableros',
      'Documentación y capacitación',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      { icon: 'Calendar', label: 'Reservas Online' },
      { icon: 'LayoutDashboard', label: 'Panel de Administración' },
      { icon: 'Users', label: 'Área de Clientes' },
      { icon: 'Database', label: 'Base de Datos' },
      { icon: 'BarChart2', label: 'Informes' },
      { icon: 'Lock', label: 'Acceso Seguro' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Simple',
        from: 'US$500',
        deadline: '1–15 días',
        features: [
          'Sistema de reservas',
          'Panel de gestión básico',
          'Inicio de sesión seguro',
          '30 días de soporte',
        ],
      },
      {
        name: 'Completo',
        from: 'US$1,200',
        deadline: '1–30 días',
        features: [
          'Sistema 100% personalizado',
          'Tablero con informes',
          'Notificaciones por Email/WhatsApp',
          'Portal de clientes',
          '60 días de soporte',
        ],
        highlighted: true,
      },
      {
        name: 'Desarrollo a Medida',
        from: 'Bajo pedido',
        deadline: 'A definir',
        features: [
          'Alcance personalizado',
          'Integraciones externas',
          'App móvil opcional',
          'SLA garantizado',
        ],
      },
    ],
    faq: [
      { q: '¿El sistema funciona en teléfonos móviles?', a: 'Sí. Todos los sistemas son responsivos y funcionan en cualquier dispositivo.' },
      { q: '¿Pueden mis clientes reservar por su cuenta?', a: 'Sí. El sistema permite que sus clientes elijan un horario, servicio y paguen online si es necesario.' },
      { q: '¿Qué pasa si necesito una función específica?', a: 'Desarrollamos soluciones personalizadas. Cuéntenos lo que necesita y le daremos un presupuesto.' },
    ],
  },
  {
    slug: 'automation',
    number: '03',
    title: 'Automatización',
    tagline: 'WhatsApp, flujos de trabajo e integraciones que trabajan para usted.',
    summary: 'Automatice el servicio al cliente, las notificaciones y los procesos repetitivos.',
    description:
      'Configuramos automatizaciones para su negocio: respuestas automáticas de WhatsApp, confirmaciones de citas por mensaje, notificaciones automatizadas, integración de sistemas y flujos de trabajo que eliminan las tareas manuales diarias.',
    deliverables: [
      'Servicio al cliente automático vía WhatsApp',
      'Confirmación de citas y recordatorios',
      'Notificaciones vía WhatsApp y correo electrónico',
      'Integración de plataformas (n8n/Make)',
      'Respuestas automatizadas y chatbot sencillo',
      'Documentación de flujos de trabajo',
    ],
    stack: ['n8n', 'Make', 'WhatsApp Business API', 'Zapier', 'Node.js'],
    highlights: [
      { icon: 'MessageSquare', label: 'WhatsApp Business' },
      { icon: 'Bell', label: 'Auto Notificaciones' },
      { icon: 'GitBranch', label: 'Flujos en n8n / Make' },
      { icon: 'Repeat', label: 'Sin Trabajo Manual' },
      { icon: 'Clock', label: 'Funciona 24/7' },
      { icon: 'Zap', label: 'Respuesta Inmediata' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Básico',
        from: 'US$150',
        deadline: '1–3 días',
        features: [
          'Respuesta automática de WhatsApp',
          'Confirmación de citas',
          'Hasta 2 flujos',
          '30 días de soporte',
        ],
      },
      {
        name: 'Completo',
        from: 'US$400',
        deadline: '1–8 días',
        features: [
          'Chatbot de WhatsApp',
          'Flujos ilimitados',
          'Integración con su sistema',
          'Notificaciones automatizadas',
          '60 días de soporte',
        ],
        highlighted: true,
      },
      {
        name: 'Personalizado',
        from: 'Bajo pedido',
        deadline: 'A definir',
        features: [
          'Automatización total del negocio',
          'Múltiples integraciones',
          'CRM integrado',
          'Mantenimiento mensual',
        ],
      },
    ],
    faq: [
      { q: '¿Necesito WhatsApp Business?', a: 'Sí. Debe tener configurado WhatsApp Business. Podemos ayudarle con la configuración si es necesario.' },
      { q: '¿Es inteligente el chatbot?', a: 'Para respuestas y menús sencillos, sí. Para IA conversacional avanzada, es un proyecto aparte.' },
      { q: '¿Funciona con mi sistema de reservas?', a: 'Sí. Se integra con el sistema que ya utiliza o con el sistema que construimos para usted.' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

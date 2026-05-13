export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: '1',
    question: '¿Cuál es el tiempo promedio de entrega?',
    answer:
      'Depende del alcance. Sitios web sencillos: 7-12 días. Sitios web complejos con CMS: 18-28 días. Automatizaciones: 5-15 días. E-commerce completo: 25-40 días. Identidad visual: 10-18 días. Proporcionamos un cronograma preciso después del briefing.',
  },
  {
    id: '2',
    question: '¿Cómo funciona el proceso de pago?',
    answer:
      'Trabajamos con un pago inicial del 50% antes de comenzar y el 50% restante al momento de la entrega. Para proyectos más grandes, ofrecemos planes de cuotas mediante tarjeta de crédito o transferencia bancaria.',
  },
  {
    id: '3',
    question: '¿Es necesario firmar un contrato?',
    answer:
      'Sí. Antes de comenzar cualquier trabajo, firmamos un contrato que especifica el alcance, el cronograma, el método de pago y los derechos sobre los entregables. Esto protege a ambas partes.',
  },
  {
    id: '4',
    question: '¿Conservaré el código del sitio web?',
    answer:
      'Siempre. Al final del proyecto, recibirás el repositorio completo en GitHub, sin dependencias propietarias ni bloqueos de plataforma. El código es tuyo.',
  },
  {
    id: '5',
    question: '¿Utilizan IA en sus proyectos?',
    answer:
      'Utilizamos la IA como herramienta de productividad: para investigación, generación de variaciones y optimización. El diseño, la estrategia y el código son revisados y construidos por humanos. La IA acelera, no reemplaza el juicio.',
  },
  {
    id: '6',
    question: '¿Qué sucede con el soporte post-entrega?',
    answer:
      'Todos los proyectos incluyen soporte técnico de 30 a 60 días después de la entrega, según el plan. Los errores y ajustes dentro del alcance acordado se corrigen sin costo adicional.',
  },
  {
    id: '7',
    question: '¿Atienden a clientes en toda América Latina?',
    answer:
      'Sí. La mayoría de nuestros proyectos se realizan 100% online. Atendemos a clientes en toda América Latina y el mundo. Trabajamos en español, portugués e inglés.',
  },
  {
    id: '8',
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'La inversión varía según el alcance, la complejidad y el cronograma de cada proyecto. Discutimos los precios durante la llamada de briefing: agenda la tuya de forma gratuita y sin compromiso.',
  },
];

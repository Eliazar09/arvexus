export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: 5 | 4;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'O site superou todas as expectativas. Em dois meses, os agendamentos online triplicaram. A qualidade do design convence antes do cliente ver o consultório.',
    author: 'Dra. Rafaela Mendonça',
    role: 'Fundadora',
    company: 'Clínica Lumina',
    avatar: 'https://picsum.photos/seed/avatar1/80/80',
    rating: 5,
    service: 'Sites Premium',
  },
  {
    id: '2',
    quote: 'Era caos no atendimento pelo WhatsApp. Agora tudo entra no sistema automaticamente. A equipe trabalha sem correria e o cliente recebe confirmação em segundos.',
    author: 'Carlos Freitas',
    role: 'Sócio-Gerente',
    company: 'Roraima Distribuidora',
    avatar: 'https://picsum.photos/seed/avatar2/80/80',
    rating: 5,
    service: 'Automação',
  },
  {
    id: '3',
    quote: 'Nossa identidade visual nunca tinha sido tratada com seriedade. O resultado foi uma marca que abriu portas em mercados que antes nem nos olhavam.',
    author: 'Eng. Marcos Vinhais',
    role: 'CEO',
    company: 'Nova Era Construtora',
    avatar: 'https://picsum.photos/seed/avatar3/80/80',
    rating: 5,
    service: 'Identidade Visual',
  },
  {
    id: '4',
    quote: 'A loja ficou linda e funciona perfeitamente. Vendemos para São Paulo, Rio, Manaus — nunca imaginamos chegar tão longe com as peças.',
    author: 'Dona Maria Pinheiro',
    role: 'Coordenadora',
    company: 'Artesanato da Floresta',
    avatar: 'https://picsum.photos/seed/avatar4/80/80',
    rating: 5,
    service: 'E-commerce',
  },
  {
    id: '5',
    quote: 'Os reels aumentaram o engajamento em 400% no primeiro mês. Qualidade de produção que a gente não esperava encontrar em Boa Vista.',
    author: 'Tatiane Azevedo',
    role: 'Gerente de Marketing',
    company: 'Rede Farmácias Norte',
    avatar: 'https://picsum.photos/seed/avatar5/80/80',
    rating: 5,
    service: 'Edição de Vídeo',
  },
  {
    id: '6',
    quote: 'Contratei o pacote de social e em 3 meses a conta cresceu 12 mil seguidores organicamente. O design é coerente e profissional de verdade.',
    author: 'Juliana Kastner',
    role: 'Proprietária',
    company: 'Studio JK Moda',
    avatar: 'https://picsum.photos/seed/avatar6/80/80',
    rating: 5,
    service: 'Design Social',
  },
  {
    id: '7',
    quote: 'Precisávamos de um sistema de agendamento que se integrasse ao nosso CRM. Entregaram em 12 dias, funciona perfeitamente e o suporte foi excelente.',
    author: 'Bruno Lacerda',
    role: 'Diretor Comercial',
    company: 'Imobiliária Panorama',
    avatar: 'https://picsum.photos/seed/avatar7/80/80',
    rating: 5,
    service: 'Sistemas',
  },
  {
    id: '8',
    quote: 'O e-commerce deles tem uma taxa de conversão que minha agência anterior nunca conseguiu. Checkout simples, Pix funcionando, painel intuitivo.',
    author: 'Felipe Drummond',
    role: 'Fundador',
    company: 'Empório Amazônico',
    avatar: 'https://picsum.photos/seed/avatar8/80/80',
    rating: 5,
    service: 'E-commerce',
  },
];

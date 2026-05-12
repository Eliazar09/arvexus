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
    quote: 'O site ficou melhor do que eu imaginava — e em 4 dias estava no ar. Em dois meses os agendamentos online triplicaram. Design que convence antes de falar uma palavra.',
    result: '+3× agendamentos',
    author: 'Rafaela M.',
    role: 'Fundadora',
    company: 'Clínica Lumina',
    initials: 'RM',
    color: '#e63946',
    rating: 5,
    service: 'Sites',
  },
  {
    id: '2',
    quote: 'Era caos no WhatsApp — cliente sem resposta, confirmação perdida. Agora tudo entra automático no sistema. A equipe trabalha sem correria e o cliente recebe confirmação em segundos.',
    result: '70% menos trabalho manual',
    author: 'Carlos F.',
    role: 'Sócio-Gerente',
    company: 'Roraima Distribuidora',
    initials: 'CF',
    color: '#25d366',
    rating: 5,
    service: 'Automação',
  },
  {
    id: '3',
    quote: 'Contratei achando que era só um site. Recebi uma máquina de fechar negócio. Em 3 semanas já tinha recuperado o investimento com novos contratos que vieram pelo site.',
    result: 'ROI em 3 semanas',
    author: 'Marcos V.',
    role: 'CEO',
    company: 'Nova Era Construtora',
    initials: 'MV',
    color: '#e63946',
    rating: 5,
    service: 'Sites',
  },
  {
    id: '4',
    quote: 'A loja ficou linda e funciona perfeitamente no celular. Vendemos para São Paulo, Rio, Manaus — nunca imaginamos chegar tão longe com as peças artesanais daqui de RR.',
    result: 'Vendas em 3 estados',
    author: 'Maria P.',
    role: 'Proprietária',
    company: 'Artesanato da Floresta',
    initials: 'MP',
    color: '#f59e0b',
    rating: 5,
    service: 'E-commerce',
  },
  {
    id: '5',
    quote: 'Meu WhatsApp virou um robô de vendas. Responde, qualifica o cliente e já manda o link de pagamento. Eu só entro pra fechar o negócio que já veio pronto.',
    result: '4× mais leads qualificados',
    author: 'Tatiane A.',
    role: 'Gerente',
    company: 'Rede Farmácias Norte',
    initials: 'TA',
    color: '#25d366',
    rating: 5,
    service: 'Automação',
  },
  {
    id: '6',
    quote: 'Precisava de um CRM integrado ao meu processo. Entregaram em 12 dias, funciona sem travar e o suporte resolveu tudo na hora. Nunca vi agilidade assim em Boa Vista.',
    result: 'Entrega em 12 dias',
    author: 'Bruno L.',
    role: 'Diretor Comercial',
    company: 'Imobiliária Panorama',
    initials: 'BL',
    color: '#e63946',
    rating: 5,
    service: 'Sistema',
  },
  {
    id: '7',
    quote: 'Tinha medo de gastar sem resultado. Pedi garantia, eles deram. Ao ver o design na primeira revisão já soube que ia funcionar. Hoje meu restaurante lotou nas sextas pelo site.',
    result: 'Reservas lotadas',
    author: 'João T.',
    role: 'Proprietário',
    company: 'Toka Restaurante',
    initials: 'JT',
    color: '#f59e0b',
    rating: 5,
    service: 'Sites',
  },
  {
    id: '8',
    quote: 'Minha clínica vet cresceu 60% em atendimentos depois do site novo. Google me mostra agora, Whatsapp lotou. Não sabia que um site podia mudar tanto o negócio assim.',
    result: '+60% em atendimentos',
    author: 'Dra. Camila R.',
    role: 'Diretora Clínica',
    company: 'Hospital Veterinário RR',
    initials: 'CR',
    color: '#10b981',
    rating: 5,
    service: 'Sites',
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: '1',
    question: 'Qual é o prazo médio de entrega?',
    answer:
      'Depende do escopo. Sites simples: 7–12 dias. Sites complexos com CMS: 18–28 dias. Automações: 5–15 dias. E-commerce completo: 25–40 dias. Identidade visual: 10–18 dias. Passamos um prazo preciso após o briefing.',
  },
  {
    id: '2',
    question: 'Como funciona o processo de pagamento?',
    answer:
      'Trabalhamos com 50% de entrada antes de começar e 50% na entrega. Em projetos acima de R$10k, parcelamos em até 3 vezes sem juros via PIX ou cartão.',
  },
  {
    id: '3',
    question: 'Preciso assinar contrato?',
    answer:
      'Sim. Antes de qualquer trabalho, assinamos um contrato que especifica escopo, prazo, forma de pagamento e direitos sobre o entregável. É proteção para os dois lados.',
  },
  {
    id: '4',
    question: 'O código do site fica comigo?',
    answer:
      'Sempre. Ao concluir o projeto, você recebe o repositório completo no GitHub, sem dependências proprietárias ou lock-in de plataforma. O código é seu.',
  },
  {
    id: '5',
    question: 'Vocês usam inteligência artificial nos projetos?',
    answer:
      'Usamos IA como ferramenta de produtividade — para pesquisa, geração de variações e otimização. O design, a estratégia e o código são revisados e construídos por humanos. IA acelera, não substitui julgamento.',
  },
  {
    id: '6',
    question: 'E o suporte após a entrega?',
    answer:
      'Todos os projetos incluem suporte técnico por 30 a 60 dias após a entrega, dependendo do plano. Bugs e ajustes dentro do escopo acordado são corrigidos sem custo adicional.',
  },
  {
    id: '7',
    question: 'Atendem clientes fora de Boa Vista ou do Brasil?',
    answer:
      'Sim. A maioria dos nossos projetos é conduzida 100% online. Atendemos todo o Brasil e América Latina. Trabalhamos em português, inglês e espanhol.',
  },
  {
    id: '8',
    question: 'Quanto custa um projeto?',
    answer:
      'O investimento varia de acordo com o escopo, complexidade e prazo de cada projeto. Conversamos sobre valores na call de briefing — agende gratuitamente e sem compromisso.',
  },
];

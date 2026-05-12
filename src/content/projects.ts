export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  cover: string;
  url: string;
  tags: string[];
  summary: string;
  result: string;
  aspectRatio: '16/10' | '4/5' | '1/1' | '3/2';
};

export type ProjectCategory = 'Sites';

export const projects: Project[] = [
  {
    slug: 'toka-restaurante',
    title: 'Toka Restaurante',
    client: 'Toka Restaurante',
    category: 'Sites',
    year: '2025',
    cover: '/projects/toka-restaurante.png',
    url: 'https://tokarestaurante.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Animações'],
    summary: 'Site institucional para restaurante com cardápio digital e reservas.',
    result: 'Reservas lotadas toda sexta',
    aspectRatio: '16/10',
  },
  {
    slug: 'hospital-vet',
    title: 'Hospital Vet',
    client: 'Hospital Veterinário',
    category: 'Sites',
    year: '2025',
    cover: '/projects/hospital-vet.png',
    url: 'https://hospitalvet.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    summary: 'Site para clínica veterinária com agendamento e apresentação de serviços.',
    result: '+60% em atendimentos',
    aspectRatio: '16/10',
  },
  {
    slug: 'nova-store',
    title: 'Nova Living',
    client: 'Nova Living',
    category: 'Sites',
    year: '2025',
    cover: '/projects/nova-store.png',
    url: 'https://novastore-br.vercel.app/',
    tags: ['Next.js', 'E-commerce', 'Tailwind CSS'],
    summary: 'Loja online com catálogo de produtos e checkout integrado.',
    result: 'Vendas em 3 estados',
    aspectRatio: '16/10',
  },
  {
    slug: 'financa-br',
    title: 'Meridian',
    client: 'Meridian',
    category: 'Sites',
    year: '2025',
    cover: '/projects/financa-br.png',
    url: 'https://finan-a-br.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Dashboard'],
    summary: 'Plataforma financeira com dashboard e controle de finanças pessoais.',
    result: 'Entregue em 4 dias',
    aspectRatio: '16/10',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ['Todos', 'Sites'] as const;

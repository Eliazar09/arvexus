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

export type ProjectCategory = 'Sitios Web';

export const projects: Project[] = [
  {
    slug: 'toka-restaurante',
    title: 'Toka Restaurante',
    client: 'Toka Restaurante',
    category: 'Sitios Web',
    year: '2025',
    cover: '/projects/toka-restaurante.png',
    url: 'https://tokarestaurante.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Animaciones'],
    summary: 'Sitio web institucional para un restaurante con menú digital y reservas.',
    result: 'Totalmente reservado cada viernes',
    aspectRatio: '16/10',
  },
  {
    slug: 'hospital-vet',
    title: 'Hospital Vet',
    client: 'Hospital Veterinario',
    category: 'Sitios Web',
    year: '2025',
    cover: '/projects/hospital-vet.png',
    url: 'https://hospitalvet.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    summary: 'Sitio web para una clínica veterinaria con agendamiento y presentación de servicios.',
    result: '+60% en citas',
    aspectRatio: '16/10',
  },
  {
    slug: 'nova-store',
    title: 'Nova Living',
    client: 'Nova Living',
    category: 'Sitios Web',
    year: '2025',
    cover: '/projects/nova-store.png',
    url: 'https://novastore-br.vercel.app/',
    tags: ['Next.js', 'E-commerce', 'Tailwind CSS'],
    summary: 'Tienda online con catálogo de productos y checkout integrado.',
    result: 'Ventas en múltiples estados',
    aspectRatio: '16/10',
  },
  {
    slug: 'financa-br',
    title: 'Meridian',
    client: 'Meridian',
    category: 'Sitios Web',
    year: '2025',
    cover: '/projects/financa-br.png',
    url: 'https://finan-a-br.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Dashboard'],
    summary: 'Plataforma financiera con tablero y gestión de finanzas personales.',
    result: 'Entregado en 4 días',
    aspectRatio: '16/10',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ['Todos', 'Sitios Web'] as const;

import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { projects, getProject } from '@/content/projects';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();
  redirect(project.url);
}

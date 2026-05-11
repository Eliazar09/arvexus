import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getService } from '@/content/services';
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';

const SLUG = 'automacao';

export async function generateMetadata(): Promise<Metadata> {
  const service = getService(SLUG);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description.slice(0, 155),
  };
}

export default function Page() {
  const service = getService(SLUG);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}

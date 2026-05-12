import type { Metadata } from 'next';
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arvexbr.com'),
  title: {
    default: 'Arvex Agency — Sites, Automação e Sistemas em Boa Vista RR',
    template: '%s | Arvex Agency',
  },
  description:
    'Agência de tecnologia em Boa Vista, Roraima. Sites profissionais entregues em 1–5 dias, automação de WhatsApp, sistemas web e CRM. +30 projetos entregues, 100% aprovação.',
  keywords: [
    'agência de sites Boa Vista',
    'criação de site Roraima',
    'automação WhatsApp Boa Vista',
    'site profissional Roraima',
    'agência digital Boa Vista RR',
    'sistema web Roraima',
    'CRM WhatsApp automação',
    'sites Next.js Boa Vista',
  ],
  authors: [{ name: 'Arvex Agency', url: 'https://arvexbr.com' }],
  creator: 'Arvex Agency',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://arvexbr.com',
    siteName: 'Arvex Agency',
    title: 'Arvex Agency — Sites, Automação e Sistemas em Boa Vista RR',
    description: 'Sites profissionais em 1–5 dias, automação de WhatsApp e sistemas web. Boutique tech em Boa Vista, Roraima.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arvex Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvex Agency — Sites e Automação em Boa Vista RR',
    description: 'Sites em 1–5 dias, automação WhatsApp e sistemas web. Boutique tech, Roraima.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arvex Agency',
  description: 'Boutique de tecnologia em Boa Vista, Roraima. Sites profissionais, automação de WhatsApp e sistemas web.',
  url: 'https://arvexbr.com',
  telephone: '+55-95-9-8107-5842',
  email: 'contato@arvexbr.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boa Vista',
    addressRegion: 'RR',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 2.8235,
    longitude: -60.6758,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: 'R$250–R$699/mês',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Pix, Cartão, Transferência',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  sameAs: [
    'https://instagram.com/arvexbr',
    'https://linkedin.com/company/arvexbr',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-red focus:text-paper focus:text-sm"
        >
          Pular para conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}

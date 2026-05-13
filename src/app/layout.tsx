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
  metadataBase: new URL("https://www.arvexagency.online"),
  title: {
    default: "Desarrollo Web Premium y Automatización | Arvex Agency",
    template: "%s | Arvex Agency",
  },
  description:
    "Desarrollo web de alta gama, automatización de WhatsApp y soluciones de software personalizadas para el mercado de América Latina. Experiencias digitales modernas entregadas con precisión.",
  keywords: [
    "diseño web",
    "automatización de WhatsApp",
    "sistemas web personalizados",
    "agencia de software",
    "boutique digital",
    "sitios web de alta conversión",
    "automatización de negocios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arvex Agency — Sistemas Web de Alta Gama y Automatización",
    description:
      "Sitios web premium, automatización de WhatsApp y soluciones de software a medida para su negocio.",
    url: "https://www.arvexagency.online",
    siteName: "Arvex Agency",
    locale: "es_419",
    type: "website",
    images: [
      {
        url: "https://www.arvexagency.online/og",
        width: 1200,
        height: 630,
        alt: "Arvex Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvex Agency — Sitios Web y Automatización",
    description:
      "Sitios web profesionales, automatización de WhatsApp y sistemas web en América Latina.",
    images: ["https://www.arvexagency.online/og"],
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arvex Agency',
  description: 'Boutique de tecnología en América Latina. Sitios web profesionales, automatización de WhatsApp y sistemas web.',
  url: 'https://www.arvexagency.online',
  telephone: '+55-95-98107-5842',
  email: 'arvexagency@outlook.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'América Latina',
    addressRegion: 'LATAM',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: 'US$250–US$699/mes',
  currenciesAccepted: 'USD, EUR, BRL',
  paymentAccepted: 'Credit Card, PayPal, Bank Transfer',
  areaServed: {
    '@type': 'Region',
    name: 'América Latina',
  },
  sameAs: [
    'https://instagram.com/arvexagency',
    'https://linkedin.com/company/arvexbr',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-419"
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
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

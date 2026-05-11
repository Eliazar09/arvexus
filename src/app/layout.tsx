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
    default: 'Arvex BR — Sites, Sistemas e Marcas que Vendem',
    template: '%s | Arvex BR',
  },
  description:
    'Boutique de tecnologia e criação. Sites premium, automação, e-commerce, identidade visual, vídeo e social — sob um único padrão de execução. Boa Vista–RR, Brasil.',
  keywords: ['agência digital', 'sites premium', 'automação', 'e-commerce', 'identidade visual', 'Boa Vista', 'Roraima'],
  authors: [{ name: 'Arvex BR', url: 'https://arvexbr.com' }],
  creator: 'Arvex BR',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://arvexbr.com',
    siteName: 'Arvex BR',
    title: 'Arvex BR — Sites, Sistemas e Marcas que Vendem',
    description: 'Boutique de tecnologia e criação. Sites premium, automação, e-commerce e identidade visual.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvex BR',
    description: 'Boutique de tecnologia e criação.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
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

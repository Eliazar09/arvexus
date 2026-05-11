import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/layout/NoiseOverlay';
import { Cursor } from '@/components/layout/Cursor';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseOverlay />
      <Cursor />
      <Nav />
      <WhatsAppButton />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}

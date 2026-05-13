import type { Metadata } from 'next';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { Reveal } from '@/components/primitives/RevealText';
import { LocalClock } from '@/components/primitives/LocalClock';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a free chat with Arvex. Response within 24 hours.',
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] flex items-end border-b border-white/[0.06]">
        <div className="container pb-16 pt-[120px]">
          <Reveal>
            <p className="section-label mb-6">CONTACT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
              Let's talk.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Formulário */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-2xl font-light text-paper mb-10">
                  5 steps. Less than 3 minutes.<br />
                  <span className="text-paper-soft/40" style={{ fontSize: '0.75em' }}>
                    We reply within 24h — or schedule a Google Meet now.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>

            {/* Info lateral */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-10 sticky top-24">
                  {/* Clock */}
                  <div className="border border-white/[0.06] p-6">
                    <p className="section-label mb-2">LOCAL TIME</p>
                    <LocalClock className="text-paper text-base" showCity={false} />
                    <p className="font-sans text-xs text-paper-soft/60 mt-2">
                      New York, USA (EST)
                    </p>
                    <p className="font-sans text-xs text-paper-soft/60 mt-1">
                      Service Mon-Fri, 9am-6pm
                    </p>
                  </div>

                  {/* Contatos */}
                  <div className="flex flex-col gap-6">
                    <a
                      href="mailto:arvexagency@outlook.com"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-red/40 transition-colors">
                        <Mail size={16} className="text-paper-soft group-hover:text-red transition-colors" />
                      </div>
                      <div>
                        <p className="section-label mb-1">EMAIL</p>
                        <p className="font-sans text-sm text-paper-dim group-hover:text-paper transition-colors">
                          arvexagency@outlook.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/15550198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-red/40 transition-colors">
                        <MessageSquare size={16} className="text-paper-soft group-hover:text-red transition-colors" />
                      </div>
                      <div>
                        <p className="section-label mb-1">WHATSAPP</p>
                        <p className="font-sans text-sm text-paper-dim group-hover:text-paper transition-colors">
                          +1 (555) 0198
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-paper-soft" />
                      </div>
                      <div>
                        <p className="section-label mb-1">LOCATION</p>
                        <p className="font-sans text-sm text-paper-dim">
                          New York, NY
                          <br />
                          USA — remote service nationwide and global
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Aviso resposta */}
                  <div className="border-t border-white/[0.06] pt-6">
                    <p className="font-mono text-xs text-paper-soft/50 uppercase tracking-wider">
                      Response within 24h · Free chat · No strings attached
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

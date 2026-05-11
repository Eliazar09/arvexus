'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const leftLinks = [
  { href: '/', label: 'Home', exact: true },
  { href: '/servicos', label: 'Serviços' },
  { href: '/projetos', label: 'Projetos' },
];

const rightLinks = [
  { href: '/contato', label: 'Contato' },
  { href: '/contato#orcamento', label: 'Agendar' },
];

const allLinks = [...leftLinks, ...rightLinks];

function NavLink({
  href,
  label,
  exact,
  pathname,
}: {
  href: string;
  label: string;
  exact?: boolean;
  pathname: string;
}) {
  const isActive = exact ? pathname === href : pathname.startsWith(href) && href !== '/';

  return (
    <Link
      href={href}
      className={cn(
        'relative flex items-center px-4 py-1.5 font-sans text-[13px] font-medium transition-colors duration-200 whitespace-nowrap rounded-full',
        isActive
          ? 'text-paper'
          : 'text-paper-soft/70 hover:text-paper'
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-red"
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <div
          className={cn(
            'w-full max-w-3xl flex items-center h-12 px-3 rounded-full transition-all duration-300',
            scrolled
              ? 'bg-ink/90 backdrop-blur-xl shadow-[0_4px_32px_rgb(0_0_0_/_0.5)] border-[5px] border-white/[0.07]'
              : 'bg-ink/80 backdrop-blur-lg border-[5px] border-white/[0.07]'
          )}
        >
          {/* ── Links esquerda ── */}
          <nav
            className="hidden md:flex items-center gap-0.5 flex-1"
            aria-label="Links principais"
          >
            {leftLinks.map((link) => (
              <NavLink key={link.href} {...link} pathname={pathname} />
            ))}
          </nav>

          {/* ── Logo centrado ── */}
          <Link
            href="/"
            aria-label="Arvex BR — início"
            className="mx-4 shrink-0"
          >
            <span className="font-display font-light italic text-paper tracking-tight whitespace-nowrap" style={{ fontSize: '1.05rem', fontVariationSettings: '"SOFT" 60, "opsz" 144' }}>
              Arvex Agency
            </span>
          </Link>

          {/* ── Links direita ── */}
          <nav
            className="hidden md:flex items-center gap-0.5 flex-1 justify-end"
            aria-label="Links secundários"
          >
            {rightLinks.map((link) => (
              <NavLink key={link.href} {...link} pathname={pathname} />
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/5595981075842"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-8 h-8 ml-1 rounded-full hover:bg-[#25D366]/15 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.773L2 30l7.418-1.808A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.898-1.612l-.424-.25-4.4 1.072 1.1-4.28-.278-.44A11.558 11.558 0 014.4 16c0-6.396 5.204-11.6 11.6-11.6S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.354-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.934-2.41-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.744 5.942 5.252.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.654.29-.812.29-1.508.204-1.654-.086-.146-.32-.232-.668-.406z"
                  fill="#25D366"
                />
              </svg>
            </a>
          </nav>

          {/* ── Hamburguer mobile ── */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto w-8 h-8 flex items-center justify-center text-paper-soft hover:text-paper transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? (
              <X size={16} />
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ── Drawer mobile ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-ink flex flex-col"
          >
            {/* Header drawer */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
              <Link href="/" className="flex items-center">
                <span className="font-display font-light italic text-paper" style={{ fontSize: '1.05rem', fontVariationSettings: '"SOFT" 60' }}>
                  Arvex Agency
                </span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-paper-soft hover:text-paper">
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-6 pt-8 gap-0" aria-label="Menu mobile">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block font-display text-4xl font-light text-paper hover:text-red transition-colors py-4 border-b border-white/[0.06]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

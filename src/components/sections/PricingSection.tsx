'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import NumberFlow from '@number-flow/react';
import { CheckCheck, Wrench, Zap, LayoutDashboard } from 'lucide-react';

const plans = [
  {
    id: 'manutencao',
    name: 'Website Maintenance',
    tagline: "Already have a site and need fixes, updates, or improvements? We've got you covered.",
    price: 250,
    period: '/month',
    cta: 'Hire maintenance',
    popular: false,
    Icon: Wrench,
    features: [
      'Fixes and adjustments to your current site',
      'Automatic weekly backup',
      'Security updates',
      '24/7 uptime monitoring',
      '1 content change per month',
      'WhatsApp support',
    ],
  },
  {
    id: 'automacao',
    name: 'Automation',
    tagline: 'WhatsApp and smart flows that work while you sleep.',
    price: 499,
    period: '/month',
    cta: 'Automate now',
    popular: true,
    Icon: Zap,
    features: [
      'Automatic WhatsApp customer service',
      'Custom message flows',
      'Appointment confirmation',
      'Automatic notifications',
      'Integration with current systems',
      'Monthly performance report',
    ],
  },
  {
    id: 'automacao-crm',
    name: 'Automation + CRM',
    tagline: 'Complete automation with integrated control panel and customer management.',
    price: 699,
    period: '/month',
    cta: 'I want the complete plan',
    popular: false,
    Icon: LayoutDashboard,
    features: [
      'Everything in the Automation plan',
      'CRM integrated with WhatsApp',
      'Real-time metrics dashboard',
      'Lead management and sales funnel',
      'Advanced monthly reports',
      'Onboarding and training included',
    ],
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col ${
        plan.popular
          ? 'bg-ink-2 border border-red/35'
          : 'bg-ink-2/50 border border-white/[0.07]'
      }`}
    >
      {/* Top accent line for popular */}
      {plan.popular && (
        <div className="absolute inset-x-0 -top-px h-px bg-red" />
      )}

      {/* Popular badge */}
      {plan.popular && (
        <span className="absolute -top-[13px] left-6 font-mono text-[9px] uppercase tracking-[0.18em] bg-red text-paper px-3 py-1">
          Most popular
        </span>
      )}

      <div className="p-8 flex flex-col flex-1">

        {/* Icon + name */}
        <div className="flex items-center gap-2.5 mb-6">
          <plan.Icon
            size={16}
            className={plan.popular ? 'text-red' : 'text-paper-soft/50'}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-soft/55">
            {plan.name}
          </span>
        </div>

        {/* Price */}
        <div className="mb-1">
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-sm text-paper-soft/45 leading-none">US$</span>
            <span
              className="font-display font-extrabold text-paper leading-none"
              style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
            >
              <NumberFlow
                value={plan.price}
                locales="es-AR"
                format={{ useGrouping: true }}
              />
            </span>
          </div>
          <span className="font-mono text-xs text-paper-soft/40 tracking-widest">
            {plan.period}
          </span>
        </div>

        <p className="font-sans text-sm text-paper-dim leading-relaxed mt-4 mb-8">
          {plan.tagline}
        </p>

        {/* CTA */}
        <Link
          href="/contato"
          className={`w-full flex items-center justify-center font-mono text-[11px] uppercase tracking-widest py-4 mb-8 transition-colors duration-250 ${
            plan.popular
              ? 'bg-red text-paper hover:bg-red-deep'
              : 'border border-white/[0.10] text-paper-soft hover:text-paper hover:border-white/[0.20] bg-white/[0.03]'
          }`}
          style={
            plan.popular
              ? { boxShadow: '0 0 40px rgb(230 57 70 / 0.22)' }
              : undefined
          }
        >
          {plan.cta}
        </Link>

        {/* Feature list */}
        <div className="border-t border-white/[0.06] pt-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper-soft/35 mb-5">
            What's included
          </p>
          <ul className="flex flex-col gap-3.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCheck
                  size={13}
                  className={`mt-[3px] shrink-0 ${
                    plan.popular ? 'text-red' : 'text-paper-soft/40'
                  }`}
                />
                <span className="font-sans text-sm text-paper-dim leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-10% 0px' });

  return (
    <section className="section border-b border-white/[0.06]" aria-label="Pricing">
      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end mb-16"
        >
          <div className="md:col-span-3">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              05 / PRICING
            </motion.p>
          </div>
          <div className="md:col-span-9">
            <motion.h2
              className="font-display font-light text-paper leading-tight"
              style={{ fontSize: 'var(--fs-h2)' }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Clear investment,<br />
              <span style={{ color: 'rgb(var(--red))' }}>measurable results.</span>
            </motion.h2>
            <motion.p
              className="font-sans text-paper-dim mt-5 max-w-[50ch]"
              style={{ fontSize: 'var(--fs-lead)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              No surprises. Fixed prices, clear scope, and guaranteed delivery.
            </motion.p>
          </div>
        </div>

        {/* Cards — separados por linha fina */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <div className="w-10 h-10 border border-red/30 flex items-center justify-center shrink-0">
            <CheckCheck size={18} className="text-red" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-paper mb-1">
              Satisfaction guarantee
            </p>
            <p className="font-sans text-sm text-paper-dim leading-relaxed">
              If you don't like the design within the first 48h, we'll refund 100% of the deposit, no questions asked.
              We work until you are completely satisfied.
            </p>
          </div>
          <div className="shrink-0 text-right hidden sm:block">
            <span className="font-display font-extrabold text-3xl text-red leading-none">100%</span>
            <p className="font-mono text-[9px] uppercase tracking-widest text-paper-soft/40 mt-1">refund</p>
          </div>
        </motion.div>

        {/* Urgência + rodapé */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
          </div>
          <p className="font-mono text-[10px] text-paper-soft/25 tracking-wide text-center sm:text-right">
            Systems upon request · Installments available · 50% upfront + 50% on delivery
          </p>
        </motion.div>

      </div>
    </section>
  );
}

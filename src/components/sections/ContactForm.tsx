'use client';

import { useState, forwardRef, useRef } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PdfTemplate } from './PdfTemplate';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle, Loader2, Calendar, MessageSquare,
  Globe, Wrench, Zap, LayoutDashboard, Code2, HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Schema ──────────────────────────────────────────────────────────────────

const schema = z.object({
  name:           z.string().optional(),
  email:          z.string().email('Invalid email'),
  whatsappCode:   z.string(),
  whatsappNumber: z.string().min(8, 'Invalid number'),
  company:        z.string().optional(),
  segment:        z.string().min(1,  'Select the segment'),
  hasSite:        z.enum(['sim', 'nao']),
  currentSiteUrl: z.string().optional(),
  service:        z.string().min(1,  'Select a service'),
  goal:           z.string().min(1,  'Select a goal'),
  timeline:       z.string().min(1,  'Select a timeline'),
  message:        z.string().min(10, 'Tell us more about the project (min. 10 chars)'),
  contactMethod:  z.enum(['mensagem', 'meet']),
  meetDate:       z.string().optional(),
  meetTime:       z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.contactMethod === 'meet') {
    if (!data.meetDate) ctx.addIssue({ code: 'custom', path: ['meetDate'], message: 'Select a date' });
    if (!data.meetTime) ctx.addIssue({ code: 'custom', path: ['meetTime'], message: 'Select a time' });
  }
});

type FormData = z.infer<typeof schema>;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  { id: 'voce',      label: 'You'         },
  { id: 'empresa',   label: 'Company'      },
  { id: 'servico',   label: 'Service'      },
  { id: 'projeto',   label: 'Project'      },
  { id: 'agenda',    label: 'Scheduling'  },
];

const SEGMENTS = [
  'Restaurant / Food',
  'Health / Clinic / Veterinary',
  'Law / Consulting',
  'Retail / Shop',
  'Education / Courses',
  'Beauty / Aesthetics',
  'Real Estate / Construction',
  'Technology / SaaS',
  'Other',
];

const SERVICES = [
  { id: 'manutencao',  label: 'Website Maintenance',  price: '$50/mo', Icon: Wrench,          desc: 'Fixes, updates, and support for your existing site'          },
  { id: 'automacao',   label: 'WhatsApp Automation',  price: '$99/mo', Icon: Zap,             desc: 'Automatic customer service and smart flows on WhatsApp'     },
  { id: 'crm',         label: 'Automation + CRM',     price: '$149/mo', Icon: LayoutDashboard, desc: 'Complete automation with CRM, dashboard, and client management'   },
  { id: 'site-novo',   label: 'New Website',           price: 'On request',Icon: Globe,          desc: 'Professional website from scratch, delivered in 1–5 business days'        },
  { id: 'sistema',     label: 'Web System',         price: 'On request',Icon: Code2,          desc: 'Custom web application or system for your business'           },
  { id: 'outro',       label: 'Other / Not sure',     price: 'Let\'s see',  Icon: HelpCircle,      desc: 'Tell us what you need and we\'ll find the best solution'  },
];

const GOALS = [
  'Attract more clients online',
  'Automate customer service',
  'Organize and manage leads',
  'Professionalize my digital presence',
  'Replace outdated website',
  'Launch product or company',
];

const TIMELINES = [
  { id: 'urgente',  label: 'Urgent',    sub: 'up to 1 week'   },
  { id: 'breve',    label: 'Soon',      sub: '1–2 weeks'    },
  { id: 'normal',   label: 'Normal',     sub: 'within 1 month' },
  { id: 'flex',     label: 'No rush', sub: '2+ months'       },
];

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const STEP_FIELDS: Record<number, (keyof FormData)[]> = {
  0: ['name', 'email', 'whatsappCode', 'whatsappNumber'],
  1: ['segment', 'hasSite'],
  2: ['service'],
  3: ['goal', 'timeline', 'message'],
  4: ['contactMethod'],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-soft/55">
      {children}
    </span>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="font-sans text-xs text-red mt-1 flex items-center gap-1">
      <span aria-hidden>×</span> {message}
    </p>
  );
}

const TextInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(({ placeholder, type = 'text', error, ...props }, ref) => {
  return (
    <>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={cn(
          'w-full bg-transparent border-b py-3 font-sans text-base text-paper placeholder:text-paper-soft/30',
          'focus:outline-none transition-colors duration-300',
          error ? 'border-red/60' : 'border-white/15 focus:border-red'
        )}
        {...props}
      />
      <FieldError message={error} />
    </>
  );
});
TextInput.displayName = 'TextInput';

function RadioCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 border transition-all duration-200',
        selected
          ? 'border-red/60 bg-red/[0.06]'
          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
      )}
    >
      {children}
    </button>
  );
}

// ─── Min date helper ──────────────────────────────────────────────────────────

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ContactForm() {
  const [step, setStep]         = useState(0);
  const [dir, setDir]           = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      hasSite:       'nao',
      contactMethod: 'mensagem',
      whatsappCode:  '+1',
      whatsappNumber: '',
    },
  });

  const hasSite       = useWatch({ control, name: 'hasSite' });
  const contactMethod = useWatch({ control, name: 'contactMethod' });

  const go = async (next: number) => {
    const fields = STEP_FIELDS[step];
    const valid  = await trigger(fields);
    if (!valid) return;
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const pdfRef = useRef<HTMLDivElement>(null);
  const [pdfData, setPdfData] = useState<FormData | null>(null);

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    
    // 1. Prepare PDF Data and Wait for React to Render the Template
    setPdfData(_data);
    await new Promise((r) => setTimeout(r, 200)); // wait for DOM update

    // 2. Generate PDF using html2canvas & jsPDF
    if (pdfRef.current) {
      try {
        const canvas = await html2canvas(pdfRef.current, { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#0a0a0b' 
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Briefing_Arvex_${_data.name ? _data.name.replace(/\s+/g, '') : 'Project'}.pdf`);
      } catch (err) {
        console.error('Failed to generate PDF', err);
      }
    }

    // 3. Build WhatsApp Text requesting the PDF attachment
    const message = `*New Contact via Website* 🌐

*Name:* ${_data.name || 'Not provided'}
*WhatsApp:* ${_data.whatsappCode} ${_data.whatsappNumber}
*Service:* ${_data.service}

*Return Preference:* ${_data.contactMethod === 'meet' ? `Google Meet (${_data.meetDate} at ${_data.meetTime})` : 'Message only'}

_💡 Hello, I just generated my detailed briefing in PDF through your website! I am sending the attached PDF file below so we can proceed._ 👇`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15550198?text=${encodedMessage}`;
    
    // Pequena pausa para garantir o download do PDF antes de abrir a nova aba
    await new Promise((r) => setTimeout(r, 500));
    window.open(whatsappUrl, '_blank');
    
    setLoading(false);
    setSubmitted(true);
  };

  // ── Success ──────────────────────────────────────────────────────────────────
  if (submitted) {
    const vals = getValues();
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 py-10"
      >
        <div className="w-12 h-12 border border-red/40 flex items-center justify-center">
          <CheckCircle size={22} className="text-red" />
        </div>
        <div>
          <h3 className="font-display text-3xl font-light text-paper mb-2">
            {vals.contactMethod === 'meet' ? 'Meeting scheduled.' : 'Message received.'}
          </h3>
          <p className="font-sans text-paper-dim leading-relaxed max-w-[42ch]">
            {vals.contactMethod === 'meet'
              ? `You chose ${vals.meetDate} at ${vals.meetTime}. We'll send the Google Meet link to ${vals.email} and confirm via WhatsApp.`
              : `We will contact you within 24 hours at ${vals.email} or via WhatsApp.`}
          </p>
        </div>
        <div className="border-t border-white/[0.06] pt-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
            Meanwhile, check out our projects →{' '}
            <a href="/projetos" className="text-paper-soft hover:text-paper transition-colors">
              /projects
            </a>
          </p>
        </div>
      </motion.div>
    );
  }

  // ── Slide variants ────────────────────────────────────────────────────────────
  const variants = {
    enter:   (d: number) => ({ opacity: 0, x: d > 0 ? 28 : -28 }),
    center:  { opacity: 1, x: 0 },
    exit:    (d: number) => ({ opacity: 0, x: d > 0 ? -28 : 28 }),
  };

  return (
    <div>
      {/* ── Progress bar ───────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-0 mb-12">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-7 h-7 flex items-center justify-center font-mono text-[10px] border transition-all duration-400',
                  i < step  ? 'border-red bg-red text-paper'         :
                  i === step ? 'border-red text-red'                  :
                               'border-white/15 text-paper-soft/35'
                )}
              >
                {i < step ? '✓' : i + 1}
              </div>
              <span className={cn(
                'font-mono text-[8px] uppercase tracking-[0.14em] hidden sm:block',
                i <= step ? 'text-paper-soft/60' : 'text-paper-soft/25'
              )}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-1 h-px mx-2 transition-all duration-400"
                style={{ background: i < step ? 'rgb(var(--red))' : 'rgb(255 255 255 / 0.08)' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Form ───────────────────────────────────────────────────────────────── */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={dir}>
          {/* ── STEP 0: Você ─────────────────────────────────────────────────── */}
          {step === 0 && (
            <motion.div key="s0" custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <p className="font-display text-xl font-light text-paper mb-1">Who are you?</p>
                <p className="font-sans text-sm text-paper-soft/50">Let's introduce ourselves first.</p>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Your full name</Label>
                <TextInput
                  {...register('name')}
                  placeholder="What is your name?"
                  autoFocus
                  error={errors.name?.message}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Email *</Label>
                <TextInput
                  {...register('email')}
                  type="email"
                  placeholder="your@email.com"
                  error={errors.email?.message}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>WhatsApp *</Label>
                <Controller
                  control={control}
                  name="whatsappNumber"
                  render={({ field: numField }) => (
                    <Controller
                      control={control}
                      name="whatsappCode"
                      render={({ field: codeField }) => {
                        const maskPhone = (val: string, currentCode: string) => {
                          if (currentCode !== '+55') return val.replace(/[^\d ]/g, '');
                          let v = val.replace(/\D/g, '');
                          if (v.length > 11) v = v.slice(0, 11);
                          if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
                          if (v.length > 9) v = `${v.slice(0, 9)}-${v.slice(9)}`;
                          return v;
                        };
                        return (
                          <div className="flex flex-col gap-1">
                            <div className={cn(
                              'flex items-center border-b transition-colors duration-300',
                              errors.whatsappNumber ? 'border-red/60' : 'border-white/15 focus-within:border-red'
                            )}>
                              <select
                                {...codeField}
                                className="bg-transparent text-paper font-sans text-base py-3 pr-2 focus:outline-none cursor-pointer"
                              >
                                <option value="+1" className="bg-[#0a0a0b] text-paper">🇺🇸 +1</option>
                                <option value="+55" className="bg-[#0a0a0b] text-paper">🇧🇷 +55</option>
                                <option value="+351" className="bg-[#0a0a0b] text-paper">🇵🇹 +351</option>
                                <option value="+34" className="bg-[#0a0a0b] text-paper">🇪🇸 +34</option>
                                <option value="+44" className="bg-[#0a0a0b] text-paper">🇬🇧 +44</option>
                                <option value="+49" className="bg-[#0a0a0b] text-paper">🇩🇪 +49</option>
                                <option value="+54" className="bg-[#0a0a0b] text-paper">🇦🇷 +54</option>
                                <option value="+56" className="bg-[#0a0a0b] text-paper">🇨🇱 +56</option>
                                <option value="+57" className="bg-[#0a0a0b] text-paper">🇨🇴 +57</option>
                                <option value="+52" className="bg-[#0a0a0b] text-paper">🇲🇽 +52</option>
                              </select>
                              <span className="text-paper-soft/30 mx-2">|</span>
                              <input
                                type="tel"
                                value={maskPhone(numField.value || '', codeField.value)}
                                onChange={(e) => numField.onChange(maskPhone(e.target.value, codeField.value))}
                                placeholder={codeField.value === '+55' ? "(95) 90000-0000" : "WhatsApp Number"}
                                className="w-full bg-transparent py-3 font-sans text-base text-paper placeholder:text-paper-soft/30 focus:outline-none"
                              />
                            </div>
                            <FieldError message={errors.whatsappNumber?.message} />
                          </div>
                        );
                      }}
                    />
                  )}
                />
                <p className="font-mono text-[9px] text-paper-soft/30 tracking-wide mt-1">
                  We use it only to confirm meetings or send proposals
                </p>
              </div>
            </motion.div>
          )}

          {/* ── STEP 1: Empresa ──────────────────────────────────────────────── */}
          {step === 1 && (
            <motion.div key="s1" custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <p className="font-display text-xl font-light text-paper mb-1">About your company</p>
                <p className="font-sans text-sm text-paper-soft/50">Helps us understand the context.</p>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Company or project name</Label>
                <TextInput
                  {...register('company')}
                  placeholder="Ex: Total Health Clinic, New Store..."
                  error={errors.company?.message}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Segment / Industry *</Label>
                <select
                  {...register('segment')}
                  className={cn(
                    'w-full bg-ink-2 border-b py-3 font-sans text-base text-paper',
                    'focus:outline-none transition-colors duration-300 cursor-pointer',
                    errors.segment ? 'border-red/60' : 'border-white/15 focus:border-red'
                  )}
                >
                  <option value="" className="bg-ink-2">Select the segment...</option>
                  {SEGMENTS.map((s) => (
                    <option key={s} value={s} className="bg-ink-2">{s}</option>
                  ))}
                </select>
                <FieldError message={errors.segment?.message} />
              </div>

              <div className="flex flex-col gap-3">
                <Label>Do you already have a website? *</Label>
                <div className="flex gap-3">
                  {(['sim', 'nao'] as const).map((v) => (
                    <Controller key={v} control={control} name="hasSite"
                      render={({ field }) => (
                        <button
                          type="button"
                          onClick={() => field.onChange(v)}
                          className={cn(
                            'flex-1 py-3 font-mono text-[11px] uppercase tracking-widest border transition-all duration-200',
                            field.value === v
                              ? 'border-red/60 bg-red/[0.08] text-paper'
                              : 'border-white/10 text-paper-soft/50 hover:border-white/20'
                          )}
                        >
                          {v === 'sim' ? 'Yes, I do' : 'No, I don\'t'}
                        </button>
                      )}
                    />
                  ))}
                </div>
              </div>

              {hasSite === 'sim' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <Label>Current website URL</Label>
                  <TextInput
                    {...register('currentSiteUrl')}
                    type="url"
                    placeholder="https://yourwebsite.com"
                    error={errors.currentSiteUrl?.message}
                  />
                  <p className="font-mono text-[9px] text-paper-soft/30 tracking-wide">
                    Optional — but very helpful for analysis
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── STEP 2: Serviço ──────────────────────────────────────────────── */}
          {step === 2 && (
            <motion.div key="s2" custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="font-display text-xl font-light text-paper mb-1">What do you need?</p>
                <p className="font-sans text-sm text-paper-soft/50">Select the service closest to your goal.</p>
              </div>

              <Controller control={control} name="service"
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map(({ id, label, price, Icon, desc }) => {
                      const selected = field.value === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => field.onChange(id)}
                          className={cn(
                            'text-left p-4 border transition-all duration-200 flex flex-col gap-2',
                            selected
                              ? 'border-red/60 bg-red/[0.06]'
                              : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon size={14} className={selected ? 'text-red' : 'text-paper-soft/40'} />
                              <span className="font-mono text-[11px] uppercase tracking-widest text-paper">
                                {label}
                              </span>
                            </div>
                            <span className={cn(
                              'font-mono text-[9px] uppercase tracking-widest',
                              selected ? 'text-red' : 'text-paper-soft/40'
                            )}>
                              {price}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-paper-dim leading-relaxed">
                            {desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              />
              <FieldError message={errors.service?.message} />
            </motion.div>
          )}

          {/* ── STEP 3: Projeto ──────────────────────────────────────────────── */}
          {step === 3 && (
            <motion.div key="s3" custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <p className="font-display text-xl font-light text-paper mb-1">About the project</p>
                <p className="font-sans text-sm text-paper-soft/50">The more detail, the better the proposal.</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>What is the main goal? *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Controller control={control} name="goal"
                    render={({ field }) => (
                      <>
                        {GOALS.map((g) => (
                          <RadioCard key={g} selected={field.value === g} onClick={() => field.onChange(g)}>
                            <span className={cn(
                              'font-sans text-sm leading-snug',
                              field.value === g ? 'text-paper' : 'text-paper-dim'
                            )}>
                              {g}
                            </span>
                          </RadioCard>
                        ))}
                      </>
                    )}
                  />
                </div>
                <FieldError message={errors.goal?.message} />
              </div>

              <div className="flex flex-col gap-3">
                <Label>What is the ideal timeline? *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Controller control={control} name="timeline"
                    render={({ field }) => (
                      <>
                        {TIMELINES.map(({ id, label, sub }) => {
                          const selected = field.value === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              onClick={() => field.onChange(id)}
                              className={cn(
                                'flex flex-col items-center py-3 px-2 border transition-all duration-200',
                                selected
                                  ? 'border-red/60 bg-red/[0.06]'
                                  : 'border-white/[0.07] hover:border-white/15'
                              )}
                            >
                              <span className={cn(
                                'font-mono text-[10px] uppercase tracking-widest',
                                selected ? 'text-paper' : 'text-paper-soft/60'
                              )}>
                                {label}
                              </span>
                              <span className="font-sans text-[11px] text-paper-soft/35 mt-0.5">{sub}</span>
                            </button>
                          );
                        })}
                      </>
                    )}
                  />
                </div>
                <FieldError message={errors.timeline?.message} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Describe the project *</Label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="What do you want to build? What problem does it solve? Do you have any reference sites or apps you admire?"
                  className={cn(
                    'w-full bg-transparent border-b py-3 font-sans text-base text-paper placeholder:text-paper-soft/30 resize-none',
                    'focus:outline-none transition-colors duration-300',
                    errors.message ? 'border-red/60' : 'border-white/15 focus:border-red'
                  )}
                />
                <FieldError message={errors.message?.message} />
              </div>
            </motion.div>
          )}

          {/* ── STEP 4: Agendamento ──────────────────────────────────────────── */}
          {step === 4 && (
            <motion.div key="s4" custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <p className="font-display text-xl font-light text-paper mb-1">How would you prefer to continue?</p>
                <p className="font-sans text-sm text-paper-soft/50">Choose how you want to be contacted.</p>
              </div>

              <Controller control={control} name="contactMethod"
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Só mensagem */}
                    <button
                      type="button"
                      onClick={() => field.onChange('mensagem')}
                      className={cn(
                        'text-left p-5 border transition-all duration-200 flex flex-col gap-2',
                        field.value === 'mensagem'
                          ? 'border-red/60 bg-red/[0.06]'
                          : 'border-white/[0.07] hover:border-white/15'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} className={field.value === 'mensagem' ? 'text-red' : 'text-paper-soft/40'} />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-paper">
                          Send message only
                        </span>
                      </div>
                      <p className="font-sans text-xs text-paper-dim leading-relaxed">
                        We reply within 24h with an initial analysis and proposal.
                      </p>
                    </button>

                    {/* Google Meet */}
                    <button
                      type="button"
                      onClick={() => field.onChange('meet')}
                      className={cn(
                        'text-left p-5 border transition-all duration-200 flex flex-col gap-2',
                        field.value === 'meet'
                          ? 'border-red/60 bg-red/[0.06]'
                          : 'border-white/[0.07] hover:border-white/15'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={field.value === 'meet' ? 'text-red' : 'text-paper-soft/40'} />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-paper">
                          Schedule Google Meet
                        </span>
                      </div>
                      <p className="font-sans text-xs text-paper-dim leading-relaxed">
                        30 min video call to understand the project and get a clear direction.
                      </p>
                    </button>
                  </div>
                )}
              />

              {/* Meet date/time picker */}
              {contactMethod === 'meet' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-6 border border-white/[0.06] p-5"
                >
                  <div className="flex flex-col gap-2">
                    <Label>Meeting date *</Label>
                    <Controller control={control} name="meetDate"
                      render={({ field }) => (
                        <input
                          type="date"
                          min={getMinDate()}
                          value={field.value ?? ''}
                          onChange={field.onChange}
                          className={cn(
                            'w-full bg-transparent border-b py-3 font-sans text-base text-paper',
                            'focus:outline-none transition-colors duration-300',
                            '[color-scheme:dark]',
                            errors.meetDate ? 'border-red/60' : 'border-white/15 focus:border-red'
                          )}
                        />
                      )}
                    />
                    <FieldError message={errors.meetDate?.message} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Time *</Label>
                    <Controller control={control} name="meetTime"
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                          {TIME_SLOTS.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => field.onChange(t)}
                              className={cn(
                                'px-4 py-2 font-mono text-[11px] uppercase tracking-widest border transition-all duration-200',
                                field.value === t
                                  ? 'border-red/60 bg-red/[0.08] text-paper'
                                  : 'border-white/10 text-paper-soft/50 hover:border-white/20'
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                    <FieldError message={errors.meetTime?.message} />
                    <p className="font-mono text-[9px] text-paper-soft/30 tracking-wide">
                      EST Timezone (UTC-5) · Mon-Fri only
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Nav buttons ────────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mt-10">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => go(step - 1)}
              className="font-mono text-[11px] uppercase tracking-widest text-paper-soft/50 hover:text-paper transition-colors"
            >
              ← Back
            </button>
          ) : <span />}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => go(step + 1)}
              className="font-mono text-[11px] uppercase tracking-widest bg-red text-paper px-8 py-3.5 hover:bg-red-deep transition-colors active:scale-[0.98]"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest bg-red text-paper px-8 py-3.5 hover:bg-red-deep transition-colors active:scale-[0.98] disabled:opacity-60"
              style={{ boxShadow: '0 0 32px rgb(230 57 70 / 0.25)' }}
            >
              {loading ? (
                <><Loader2 size={13} className="animate-spin" /> Sending...</>
              ) : contactMethod === 'meet' ? (
                'Confirm meeting →'
              ) : (
                'Send message →'
              )}
            </button>
          )}
        </div>
      </form>

      {/* Hidden PDF Template for html2canvas to read */}
      <div style={{ overflow: 'hidden', height: 0 }}>
        {pdfData && <PdfTemplate ref={pdfRef} data={pdfData} />}
      </div>
    </div>
  );
}

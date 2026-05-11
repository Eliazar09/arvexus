'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  service: z.string().min(1, 'Selecione um serviço'),
  budget: z.string().min(1, 'Selecione uma faixa de orçamento'),
  message: z.string().min(20, 'Mensagem deve ter ao menos 20 caracteres'),
});

type FormData = z.infer<typeof schema>;

const steps = ['Quem é você?', 'Sobre o projeto', 'Nos conta mais'];

const serviceOptions = [
  'Sites Premium',
  'Automação & Sistemas',
  'E-commerce',
  'Identidade Visual',
  'Edição de Vídeo',
  'Design para Social',
  'Mais de um serviço',
];

const budgetOptions = [
  'Até R$ 3.000',
  'R$ 3.000 – R$ 8.000',
  'R$ 8.000 – R$ 20.000',
  'Acima de R$ 20.000',
  'Ainda não sei',
];

function FieldWrapper({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-xs uppercase tracking-widest text-paper-soft">{label}</label>
      {children}
      {error && (
        <p className="font-sans text-xs text-red mt-1 flex items-center gap-1">
          <span aria-hidden>×</span> {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const inputClass = cn(
    'w-full bg-transparent border-b border-white/20 py-3 font-sans text-paper placeholder:text-paper-soft/40',
    'focus:outline-none focus:border-red transition-colors duration-300',
    'text-base'
  );

  const canProceed = async () => {
    if (step === 0) return trigger(['name', 'email']);
    if (step === 1) return trigger(['service', 'budget']);
    return true;
  };

  const next = async () => {
    if (await canProceed()) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-6 py-12"
      >
        <CheckCircle size={40} className="text-red" />
        <h3 className="font-display text-3xl font-light text-paper">Mensagem recebida.</h3>
        <p className="font-sans text-paper-dim max-w-[40ch]">
          Entramos em contato em até 24 horas. Enquanto isso, explore nossos projetos.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress steps */}
      <div className="flex items-center gap-3 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={cn(
                'w-6 h-6 flex items-center justify-center font-mono text-[10px] border transition-all duration-300',
                i <= step ? 'border-red text-red' : 'border-white/20 text-paper-soft/40'
              )}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <span className={cn('w-8 h-px transition-all duration-300', i < step ? 'bg-red' : 'bg-white/10')} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <FieldWrapper label="Seu nome" error={errors.name?.message}>
                <input
                  {...register('name')}
                  placeholder="Como você se chama?"
                  className={inputClass}
                  autoFocus
                />
              </FieldWrapper>
              <FieldWrapper label="Email" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </FieldWrapper>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <FieldWrapper label="Serviço de interesse" error={errors.service?.message}>
                <select
                  {...register('service')}
                  className={cn(inputClass, 'cursor-pointer')}
                >
                  <option value="">Selecione...</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o} className="bg-ink-2">{o}</option>
                  ))}
                </select>
              </FieldWrapper>
              <FieldWrapper label="Faixa de orçamento" error={errors.budget?.message}>
                <select
                  {...register('budget')}
                  className={cn(inputClass, 'cursor-pointer')}
                >
                  <option value="">Selecione...</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o} className="bg-ink-2">{o}</option>
                  ))}
                </select>
              </FieldWrapper>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <FieldWrapper label="Conte sobre o projeto" error={errors.message?.message}>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="O que você precisa? Qual é o contexto? Quando precisa?"
                  className={cn(inputClass, 'resize-none')}
                />
              </FieldWrapper>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4 mt-10">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="font-mono text-xs uppercase tracking-widest text-paper-soft hover:text-paper transition-colors"
            >
              ← Voltar
            </button>
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={next}
              className="font-mono text-xs uppercase tracking-widest bg-red text-paper px-6 py-3 hover:bg-red-deep transition-colors active:scale-[0.98]"
            >
              Continuar →
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest bg-red text-paper px-6 py-3 hover:bg-red-deep transition-colors active:scale-[0.98] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Enviando...
                </>
              ) : (
                'Enviar mensagem →'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

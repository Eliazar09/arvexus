import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-mono uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red disabled:opacity-40 disabled:pointer-events-none';

    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-red text-paper hover:bg-red-deep active:scale-[0.98]',
      ghost:
        'bg-transparent text-red border border-red/40 hover:bg-red hover:text-paper hover:border-red',
      outline:
        'bg-transparent text-paper border border-white/20 hover:border-paper/60 hover:text-paper',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'text-[11px] px-4 py-2 gap-2',
      md: 'text-xs px-6 py-3 gap-2',
      lg: 'text-sm px-8 py-4 gap-3',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

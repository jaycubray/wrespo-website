import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  pulse?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  pulse = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = `
    relative font-semibold rounded-xl
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    overflow-hidden
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-primary to-blue-600
      text-white
      shadow-lg shadow-primary/25
      hover:shadow-xl hover:shadow-primary/30
      focus-visible:ring-primary
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-blue-600 before:to-primary
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    secondary: `
      bg-gradient-to-r from-secondary to-emerald-400
      text-dark font-bold
      shadow-lg shadow-secondary/25
      hover:shadow-xl hover:shadow-secondary/30
      focus-visible:ring-secondary
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-emerald-400 before:to-secondary
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary hover:text-white
      hover:shadow-lg hover:shadow-primary/20
      focus-visible:ring-primary
      bg-white/50 backdrop-blur-sm
    `,
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm min-h-[42px]',
    md: 'px-7 py-3.5 text-base min-h-[50px]',
    lg: 'px-10 py-5 text-lg min-h-[60px] tracking-wide',
  }

  const pulseClass = pulse ? 'animate-pulse-glow' : ''

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], pulseClass, className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

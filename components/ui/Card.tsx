import { ReactNode, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  glass?: boolean
  style?: CSSProperties
}

export default function Card({
  children,
  className,
  hover = false,
  gradient = false,
  glass = false,
  style
}: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        'bg-white rounded-2xl p-6',
        'shadow-[0_4px_20px_rgba(0,0,0,0.06)]',
        'border border-gray-100/50',
        hover && `
          transition-all duration-300 ease-out
          hover:-translate-y-2
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          hover:border-primary/20
          cursor-pointer
        `,
        gradient && `
          relative overflow-hidden
          before:absolute before:inset-0
          before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
        `,
        glass && `
          bg-white/70 backdrop-blur-xl
          border border-white/30
        `,
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

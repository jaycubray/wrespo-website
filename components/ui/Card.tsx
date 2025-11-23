import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md p-6',
        hover && 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}

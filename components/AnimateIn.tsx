'use client'
import { CSSProperties, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

type From = 'bottom' | 'left' | 'right' | 'none'

const hidden: Record<From, CSSProperties> = {
  bottom: { opacity: 0, transform: 'translateY(32px)' },
  left:   { opacity: 0, transform: 'translateX(-32px)' },
  right:  { opacity: 0, transform: 'translateX(32px)' },
  none:   { opacity: 0 },
}

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  from?: From
}

export default function AnimateIn({ children, className = '', delay = 0, from = 'bottom' }: Props) {
  const { ref, visible } = useInView()

  const style: CSSProperties = {
    transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    ...(visible ? { opacity: 1, transform: 'translate(0)' } : hidden[from]),
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

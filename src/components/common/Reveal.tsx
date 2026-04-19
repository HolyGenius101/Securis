import type { PropsWithChildren } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'

type RevealProps = PropsWithChildren<{
  className?: string
}>

export function Reveal({ className, children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div className={cn('reveal', visible && 'reveal-visible', className)} ref={ref}>
      {children}
    </div>
  )
}
